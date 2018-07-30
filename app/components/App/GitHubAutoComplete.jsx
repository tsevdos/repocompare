import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import searchRepositories from "queries/searchRepositories.gql";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Select from "react-select";

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    fontSize: 18,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 18,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 18,
  },
});


function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          ref: props.innerRef,
          children: props.children,
          ...props.innerProps,
        }
      }}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={event => {
        props.removeProps.onClick();
        props.removeProps.onMouseDown(event);
      }}
    />
  );
}

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  MultiValue,
  ValueContainer,
};

const GitHubAutoComplete = ({
  repos, searchterm, data, onUpdateInput, onSelectChange, classes
}) => {
  const { loading, error } = data;
  const searchResults =
    (!loading && !error)
      ? data.search.edges.map(repo => {
        return {
          value: repo.node.nameWithOwner,
          label: repo.node.nameWithOwner
        };
      })
      : [];

  const displayedRepos = repos.map(({id}) => {
    return {
      value: id,
      label: id
    };
  });

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        components={components}
        defaultValue={displayedRepos}
        value={displayedRepos}
        inputValue={searchterm}
        options={searchResults}
        onChange={onSelectChange}
        onInputChange={onUpdateInput}
        placeholder="ex. react"
        menuIsOpen={Boolean(searchResults.length)}
        isMulti
      />
    </div>
  );
};

GitHubAutoComplete.propTypes = {
  searchterm: PropTypes.string.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    search: PropTypes.object
  }).isRequired,
  onUpdateInput: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired
};

export default graphql(searchRepositories, {
  options: props => ({
    variables: {
      searchterm: props.searchterm
    }
  })
})(withStyles(styles)(GitHubAutoComplete));
