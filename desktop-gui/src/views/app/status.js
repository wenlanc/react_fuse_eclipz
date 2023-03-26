import React, { useState, useEffect } from 'react';
import { Row, Button, Collapse } from 'reactstrap';
import Switch from 'react-switch';
import axios from 'axios';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import IntlMessages from '../../helpers/IntlMessages';
import { NotificationManager } from '../../components/common/react-notifications';

const StatusPage = ({ match }) => {
  const [data, setData] = useState(null);
  const [connectStatus, setConnectStatus] = useState(true);
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8088/api/status').then((response) => {
      if (response && response.data) {
        delete response.data.apps;
        setData(response.data);
      }
    });
  }, []);

  const handleClickConnect = () => {
    axios.get('http://localhost:8088/api/connect').then((response) => {
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
    axios.get('http://localhost:8088/api/disconnect').then((response) => {
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
  const handleStatusChange = (checked) => {
    setConnectStatus(checked);
    if (checked) {
      handleClickConnect();
    } else {
      handleClickDisconnect();
    }
  };
  const uncheckedIcon = (
    <svg
      viewBox="-2 -5 14 20"
      height="100%"
      width="100%"
      style={{ position: 'absolute', top: 0 }}
    >
      <path
        d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  );
  const checkedIcon = (
    <svg
      height="100%"
      width="100%"
      viewBox="-2 -5 17 21"
      style={{ position: 'absolute', top: 0 }}
    >
      <path
        d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
        fill="#144339"
        fillRule="evenodd"
      />
    </svg>
  );
  return (
    <>
      <Row>
        <Colxx xxs="12" className="mt-5">
          {/* <Breadcrumb heading="menu.status" match={match} /> */}
          <Separator className="mb-5 d-none" />
          <Switch
            onChange={handleStatusChange}
            checked={connectStatus}
            offColor="#6b2747"
            onColor="#156745"
            offHandleColor="#dd2350"
            onHandleColor="#05c44c"
            uncheckedIcon={false}
            checkedIcon={false}
            uncheckedHandleIcon={uncheckedIcon}
            checkedHandleIcon={checkedIcon}
          />
        </Colxx>
      </Row>
      <Row className="mb-3 mt-1">
        <Colxx xxs="12">
          <span style={{ fontSize: '1.15rem' }}>
            This computer is
            {connectStatus ? (
              <span
                style={{
                  fontSize: '1.25rem',
                  color: '#05c44c',
                }}
              >
                {' protected'}
              </span>
            ) : (
              <span
                style={{
                  fontSize: '1.25rem',
                  color: '#dd2350',
                }}
              >
                {' unprotected'}
              </span>
            )}
          </span>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Button
            color="primary"
            onClick={() => setCollapse(!collapse)}
            className="mb-1"
          >
            Details
          </Button>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Collapse isOpen={collapse}>
            <table className="table table-sm table-borderless">
              <tbody>
                {data &&
                  Object.keys(data).map((key) => {
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
                          <span className="text-muted">{data[key]}</span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {/* <Button color="primary" className="mb-2" onClick={handleClickConnect}>
              <IntlMessages id="button.connected" />
            </Button>{' '}
            <Button
              outline
              color="primary"
              className="mb-2"
              onClick={handleClickDisconnect}
            >
              <IntlMessages id="button.disconnect" />
            </Button>{' '} */}
          </Collapse>
        </Colxx>
      </Row>
    </>
  );
};

export default StatusPage;
