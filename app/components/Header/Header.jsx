import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'

const buttonStyle = {
  marginTop: '15px',
  color: 'white'
}

const Header = () =>
(
  <AppBar
    title="RepoCompare"
    className="appbar"
    iconElementLeft={
      <IconButton
        containerElement={<Link to="/" />}
        touch={true}
      >
        <FontIcon className="material-icons">home</FontIcon>
      </IconButton>
    }
  >
    <FlatButton
      label="About"
      containerElement={<Link to="/about" />}
      style={buttonStyle}
    />
    <FlatButton
      label="Gihub"
      href="https://github.com/tsevdos/repocompare"
      target="_blank"
      style={buttonStyle}
    />
  </AppBar>
)

export default Header
