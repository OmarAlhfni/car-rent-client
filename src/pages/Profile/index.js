import React, { Component } from "react";
import { connect } from "react-redux";
import {
  AddCar,
  InfoProfile,
  ProfileCard,
  Card,
  ModelProfile,
  CardOffer,
} from "../../Components/Profile";
import {
  fetchMyCars,
  deleteCar,
  setActiveItem,
  updateCar,
  fetchMyOffer,
  deleteOffer,
} from "../../actions";
import { BtnScroll } from "../../Components";
import "./index.css";

class Profile extends Component {
  componentDidMount() {
    const { fetchMyCars, fetchMyOffer } = this.props;
    fetchMyCars();
    fetchMyOffer();
  }

  state = {
    info: false,
    add: true,
    heddin: true,
    id: "",
    name: "",
    model: "",
    price: "",
    photo: [],
    available: false,
    transmissions: "manual",
    id_type: "1",
    id_color: "1",
    id_category: "1",
  };

  handelClickSetItem = () => {
    const {
      id,
      name,
      model,
      price,
      photo,
      available,
      transmissions,
      id_type,
      id_color,
      id_category,
    } = this.props.activeItem;
    this.setState({
      id: id,
      name: name,
      model: model,
      price: price,
      photo: photo,
      available: available,
      transmissions: transmissions,
      id_type: id_type,
      id_color: id_color,
      id_category: id_category,
    });
  };

  handleChange = (e) => {
    if (e.target.type === "file") {
      this.setState({ photo: e.target.files });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmitEdit = (e) => {
    // e.preventDefault();
    const {
      id,
      name,
      model,
      price,
      photo,
      available,
      transmissions,
      id_type,
      id_color,
      id_category,
    } = this.state;

    const formData = new FormData();
    formData.set("name", name);
    formData.set("model", model);
    formData.set("price", price);
    formData.set("photo", photo[0]);
    formData.set("available", available);
    formData.set("transmissions", transmissions);
    formData.set("id_type", id_type);
    formData.set("id_owner", this.props.profile.id);
    formData.set("id_color", id_color);
    formData.set("id_category", id_category);
    console.log(formData);

    this.props.updateCar(formData, id);

    this.setState({
      id: "",
      name: "",
      model: "",
      price: "",
      photo: [],
      available: false,
      transmissions: "manual",
      id_type: "1",
      id_color: "1",
      id_category: "1",
    });
  };

  toggleShow = () => {
    const { add, info } = this.state;
    this.setState({
      add: !add,
      info: !info,
    });
  };

  handleDelete = (e) => {
    const deleteItem = e.target.attributes.getNamedItem("data-id").value;
    const { deleteCar, fetchMyCars } = this.props;
    deleteCar(deleteItem);
    fetchMyCars();
  };

  handleDeleteOffer = (e) => {
    const deleteItem = e.target.attributes.getNamedItem("data-id").value;
    const { deleteOffer, fetchMyOffer } = this.props;
    deleteOffer(deleteItem);
    fetchMyOffer();
  };

  openModel = (e) => {
    e.stopPropagation();
    this.setState({ heddin: false });
  };

  closeModel = (e) => {
    e.stopPropagation();
    this.setState({ heddin: true });
  };

  render() {
    const { profile, myCars, setActiveItem, myOffer } = this.props;
    const { info, add, heddin } = this.state;
    
    return (
      <div>
        <div className="headImg"></div>

        <div className="conm">
          <ProfileCard profile={profile} />
          <AddCar hidden={add} toggleShow={this.toggleShow} />
          <InfoProfile hidden={info} toggleShow={this.toggleShow} />
        </div>

        {myCars.length === 0 ? null : (
          <div className="myCars">
            <p className="myCarsTitle"> My Cars </p>
            {myCars.map((el, index) => {
              return (
                <Card
                  el={el}
                  key={index}
                  handleDelete={this.handleDelete}
                  setActiveItem={setActiveItem}
                  openModel={this.openModel}
                  handelClickSetItem={this.handelClickSetItem}
                />
              );
            })}
          </div>
        )}

        {myOffer.length === 0 ? null : (
          <div className="myCars">
            <p className="myCarsTitle"> My Offers </p>
            {myOffer.map((el, index) => {
              return (
                <CardOffer
                  el={el}
                  key={index}
                  handleDelete={this.handleDeleteOffer}
                />
              );
            })}
          </div>
        )}

        <ModelProfile
          heddin={heddin}
          openModel={this.openModel}
          closeModel={this.closeModel}
          state={this.state}
          handleSubmitEdit={this.handleSubmitEdit}
          handleChange={this.handleChange}
        />

        <BtnScroll />
      </div>
    );
  }
}

const mapStateToProps = ({ owner, cars }) => {
  return {
    profile: owner.profile,
    myCars: cars.myCars,
    activeItem: cars.activeItem,
    myOffer: cars.myOffer,
  };
};

const mapDispatchToProps = {
  fetchMyCars,
  deleteCar,
  setActiveItem,
  updateCar,
  fetchMyOffer,
  deleteOffer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
