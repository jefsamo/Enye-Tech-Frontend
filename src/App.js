import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

class App extends Component {
  state = {
    profiles: [],
    orgProfiles: [],
    searchField: "",
    gender: "",
    paymentMethod: "",
    offset: 0,
    currentPage: 0,
    resultPerPage: 20,
    pageCount: 0,
  };

  async componentDidMount() {
    const res = await fetch("https://api.enye.tech/v1/challenge/records");
    const profilesJson = await res.json();
    this.setState({
      profiles: profilesJson.records.profiles.slice(
        0,
        this.state.resultPerPage
      ),
      orgProfiles: profilesJson.records.profiles,
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.resultPerPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData = () => {
    const data = this.state.orgProfiles;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.resultPerPage
    );
    this.setState({
      profiles: slice,
    });
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  handleGender = (e) => {
    this.setState({ gender: e.target.value });
  };
  handlePayment = (e) => {
    this.setState({ paymentMethod: e.target.value });
  };

  render() {
    const { profiles, searchField, gender, paymentMethod } = this.state;

    let filteredProfile = profiles.slice(0, 20);

    if (searchField) {
      filteredProfile = profiles.filter((profile) =>
        profile.FirstName.toLowerCase().includes(searchField.toLowerCase())
      );
    } else if (gender) {
      filteredProfile = profiles.filter((profile) => profile.Gender === gender);
    } else if (paymentMethod) {
      filteredProfile = profiles.filter(
        (profile) => profile.PaymentMethod === paymentMethod
      );
    }

    return (
      <div>
        <h1 className="title">The Enye-Tech(Frontend)</h1>

        <SearchBox
          handleChange={this.handleChange}
          handleGender={this.handleGender}
          handlePayment={this.handlePayment}
        />
        <ProfileCard profiles={filteredProfile} />

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(
            this.state.orgProfiles.length / this.state.resultPerPage
          )}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default App;
