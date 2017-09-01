import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CourseSelect extends Component {
  state = {
    department: null,
    course: null,
    courses: [],
    _loading: false
  };

  componentWillReceiveProps(update) {
    this.setState({
      department: update.department,
      course: update.course
    });
  }

  renderDepartmentSelect = () => {};

  renderCourseSelect = () => {};

  onSelectDepartment = evt => {
    const department = evt.target.value;
    const course = null;
    this.setState({ department, course });
    this.props.onChange({ name: 'department', value: department });
    this.props.onChange({ name: 'course', value: course });

    if (department) this.fetch(department);
  };

  render() {
    return (
      <div>
        {this.renderDepartmentSelect()}
        <br />
        {this.renderCourseSelect()}
      </div>
    );
  }
}

CourseSelect.propTypes = {
  department: PropTypes.string,
  course: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default CourseSelect;
