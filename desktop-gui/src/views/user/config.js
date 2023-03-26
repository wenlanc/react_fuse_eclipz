import React, { useState, useEffect } from 'react';
import {
  Row,
  Card,
  InputGroup,
  InputGroupAddon,
  CustomInput,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Colxx } from '../../components/common/CustomBootstrap';
import { NotificationManager } from '../../components/common/react-notifications';
import { adminRoot } from '../../constants/defaultValues';

const SelectConfig = ({ history, error }) => {
  const [selectedFile, setSelectedFile] = useState('');

  useEffect(() => {
    if (selectedFile) {
      try {
        const configContent = JSON.parse(selectedFile);
        localStorage.setItem('eclipz_config', JSON.stringify(configContent));
        NotificationManager.success(
          'Success.',
          'Imported config file successfully',
          3000,
          null,
          null,
          ''
        );
        history.push(adminRoot);
      } catch (err) {
        NotificationManager.warning(
          error,
          'Invalid Config File',
          3000,
          null,
          null,
          ''
        );
      }
    }
  }, [selectedFile]);

  const handleClickFile = (ev) => {
    ev.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      setSelectedFile(e.target.result);
    };
    reader.readAsText(ev.target.files[0]);
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">Configuration file Missing</p>
            <p className="white mb-0">
              If you have the configuration file,then please select it now.
              <br />
              If you do not have the configuration file, please ask your <br />
              administrator to provide you a configuration file.
            </p>
          </div>
          <div className="form-side">
            <InputGroup className="mb-3">
              <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
              <CustomInput
                type="file"
                id="exampleCustomFileBrowser1"
                name="customFile"
                onChange={handleClickFile}
              />
            </InputGroup>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps)(SelectConfig);
