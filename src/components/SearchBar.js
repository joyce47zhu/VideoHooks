import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label> Video Search</label>
          <input
            type="text"
            value={term}
            placeholder="E.X."
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   // state = { term: "" };

//   // onInputChange = (event) => {
//   //   this.setState({ term: event.target.value });
//   // };

//   // onFormSubmit = (event) => {
//   //   event.preventDefault();
//   //   this.props.onFormSubmit(this.state.term);
//   // };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label> Video Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               placeholder="E.X."
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
