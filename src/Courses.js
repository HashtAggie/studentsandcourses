import React from 'react';

class Courses extends React.Component {

  render() {
    let courses = this.state.courses.map(function(course) {
      return <li key={course.id}><h1>{course.name}</h1><p>{course.description}</p></li>;
    });

    return (
        <ul>
          {courses}
        </ul>
    )
  }

  constructor(props) {
    super(props);
    this.state= {
      courses: []
    };
  }

  componentDidMount() {
    this.setState({
      courses: [{name: 'React', description:'Its a course'}, {name: 'Javascript', description:'Learn the basics'}],
    });
  }



}
export default Courses;
