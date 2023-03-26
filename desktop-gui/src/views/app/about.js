import React from 'react';
import { Row, Card, CardBody } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';

const AboutPage = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12" className="mb-4 mt-4">
          <div className="icon-row-item mt-4 mb-4">
            <Card>
              <CardBody className="mt-4 text-center">
                <img
                  alt="Logo"
                  src="assets/logos/log_dark.png"
                  className="img-thumbnail list-thumbnail align-self-center mt-4 mb-4"
                  style={{ background: 'transparent' }}
                />
                <p className="mt-4 card-text font-weight-semibold mb-0">
                  Eclipz for Windows(64bit)
                </p>
                <p className="lead text-center">Version 2.1.0</p>
              </CardBody>
            </Card>
          </div>
        </Colxx>
      </Row>
    </>
  );
};

export default AboutPage;
