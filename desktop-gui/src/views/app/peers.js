/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import { Row, Card, CardBody, Nav, NavItem, NavLink, Button } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import { NotificationManager } from '../../components/common/react-notifications';

const PeersPage = ({ match }) => {
  const [data, setData] = useState([]);
  const [selectedPeer, setSelectedPeer] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8088/api/peers').then((response) => {
      if (response && response.data) {
        setData(response.data);
        if (response.data.length > 0) {
          setSelectedPeer(0);
        }
      }
    });
  }, []);
  const handleClickConnect = () => {
    axios
      .get('http://localhost:8088/api/peerconnect', {
        name: data[selectedPeer].name,
      })
      .then((response) => {
        if (response) {
          NotificationManager.success(
            'Success.',
            'Connected successfully',
            3000,
            null,
            null,
            ''
          );
        }
      });
  };
  const handleClickDisconnect = () => {
    axios
      .get('http://localhost:8088/api/peerdisconnect', {
        name: data[selectedPeer].name,
      })
      .then((response) => {
        if (response) {
          NotificationManager.success(
            'Success.',
            'Disconnected successfully',
            3000,
            null,
            null,
            ''
          );
        }
      });
  };
  return (
    <>
      <Row>
        <Colxx xxs="12">
          {/* <Breadcrumb heading="menu.peers" match={match} /> */}
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card className="h-100">
            <CardBody>
              <Row>
                <Colxx xxs="4" className="mb-4">
                  <Nav
                    style={{ maxHeight: '270px' }}
                    className="nav-pills flex-column"
                  >
                    <PerfectScrollbar
                      options={{
                        suppressScrollX: true,
                        wheelPropagation: false,
                      }}
                    >
                      {data &&
                        data.length > 0 &&
                        data.map((peer, index) => {
                          return selectedPeer === index ? (
                            <NavItem
                              active
                              key={index}
                              style={{
                                borderRadius: '50px',
                                color: '#242224',
                                backgroundColor: '#7e4877',
                              }}
                            >
                              <NavLink
                                href="#"
                                onClick={() => {
                                  setSelectedPeer(index);
                                }}
                              >
                                {peer.name}
                              </NavLink>
                            </NavItem>
                          ) : (
                            <NavItem key={index}>
                              <NavLink
                                href="#"
                                onClick={() => {
                                  setSelectedPeer(index);
                                }}
                              >
                                {peer.name}
                              </NavLink>
                            </NavItem>
                          );
                        })}
                    </PerfectScrollbar>
                  </Nav>
                </Colxx>
                <Colxx xxs="8" className="mb-4">
                  <table className="table table-sm table-borderless">
                    <tbody>
                      {data[selectedPeer] &&
                        Object.keys(data[selectedPeer]).map((key) => {
                          return (
                            <tr key={key}>
                              <td>
                                <span
                                  style={{ textTransform: 'capitalize' }}
                                  className="font-weight-medium"
                                >
                                  {key.replace('_', ' ')}
                                </span>
                              </td>
                              <td className="">
                                <span className="text-muted">
                                  {data[selectedPeer][key]}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                  <Button
                    color="primary"
                    className="mb-2"
                    onClick={handleClickConnect}
                  >
                    <IntlMessages id="button.connected" />
                  </Button>{' '}
                  <Button
                    outline
                    color="primary"
                    className="mb-2"
                    onClick={handleClickDisconnect}
                  >
                    <IntlMessages id="button.disconnect" />
                  </Button>{' '}
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default PeersPage;
