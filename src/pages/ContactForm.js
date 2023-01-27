import React, { useState, useEffect } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import trash from "..//assets//icons//svg icons/trash.svg";
import edit from "..//assets//icons//svg icons/edit.svg";
import { v4 as uuidv4 } from "uuid";

const ContactForm = (props) => {
  const dispatch = useDispatch();
  // const currentContactID = useSelector((state) => state.CurrentContactID);
  // const contacts = useSelector((state) => state.contacts);
  // console.log(contacts);

  const isAdding = useSelector((state) => state.isAdding);
  const isPreviewing = useSelector((state) => state.isPreviewing);
  const baseURL = useSelector((state) => state.baseURL);

  const addContactHandler = (Contact) => {
    dispatch({ type: "addContact", newContact: Contact });
    console.log("From Contact Handler");
  };
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    delayError: 200,
    defaultValues: {
      ...props.currentContactData,
    },
  });

  const submitHandler = (data) => {
    const ContactData = {
      id: crypto.randomUUID(),
      segementType: "Spender",
      ...data,
    };

    // fetch(`${baseURL}adduser`, {
    //   method: "post",
    //   body: JSON.stringify(ContactData),
    //   headers: { "Content-Type": "application/json" },
    // });

    addContactHandler(ContactData);
    reset();
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  // const enableEditingHandler = () => dispatch({ type: "enableEditing" });

  const formChangeHandler = () => {
    dispatch({ type: "changeFormState" });
  };
  const disableEditingHandler = () => dispatch({ type: "disableEditing" });

  return (
    <Card>
      {isAdding && <div className="adding-contact">Adding a new Contact</div>}
      {!isAdding && (
        <div className="editing-contact">
          <div className="btn positive form-state" onClick={formChangeHandler}>
            {/* <img className="btn-icon" src={edit} alt="edit" /> */}
            {!isPreviewing ? "Start Previewing" : "Start Editing"} &#8594;
          </div>
          <div className="form-header">
            {isPreviewing ? "Previewing" : "Editing"} an existing Contact
          </div>
        </div>
      )}
      {
        <fieldset disabled={isPreviewing}>
          <form disabled onSubmit={handleSubmit(submitHandler)}>
            {/* <div>
              <img src={trash} alt="trash" />
            </div> */}
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label className="required" for="type">
                  Type
                </label>
                <select id="type" {...register("type", { required: true })}>
                  <option value="Lead">Lead</option>
                  <option value="Client">Client</option>
                </select>
              </div>

              <div className="new-contact__control">
                <label for="leadScore">Lead Score</label>
                <input
                  className={errors?.leadScore ? "error" : " "}
                  id="leadScore"
                  type="number"
                  placeholder="Lead Score"
                  {...register("leadScore", {
                    min: {
                      value: 0,
                      message: "A score can't be a negative value",
                    },
                    max: {
                      value: 100,
                      message: "A score can't be more than 100",
                    },
                  })}
                />
                <p>{errors?.leadScore?.message}</p>
              </div>

              <div className="new-contact__control">
                <label className="required" for="title">
                  Title
                </label>
                <input
                  className={errors?.title ? "error" : " "}
                  id="title"
                  type="text"
                  placeholder="Title"
                  {...register("title", {
                    required: "Title is required",
                    maxLength: 150,
                  })}
                />
                {errors?.title?.message && <p>{errors?.title?.message}</p>}
              </div>

              <div className="new-contact__control">
                <label className="required" for="company">
                  Company
                </label>
                <input
                  className={errors?.company ? "error" : " "}
                  id="company"
                  type="text"
                  placeholder="Company"
                  {...register("company", {
                    required: "Company is required",
                    maxLength: 150,
                  })}
                />
                {errors?.company?.message && <p>{errors?.company?.message}</p>}
              </div>
            </Card>
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label className="required" for="firstName">
                  First Name
                </label>
                <input
                  className={errors?.firstName?.message ? "error" : " "}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required.",
                    maxLength: 100,
                  })}
                />
                <p>{errors?.firstName?.message}</p>
              </div>

              <div className="new-contact__control">
                <label className="required" for="middleName">
                  Middle Name
                </label>
                <input
                  className={errors?.middleName?.message ? "error" : " "}
                  id="middleName"
                  type="text"
                  placeholder="Middle name"
                  {...register("middleName", {
                    required: "’Middle name is required",
                    maxLength: 100,
                  })}
                />
                <p>{errors?.middleName?.message}</p>
              </div>

              <div className="new-contact__control">
                <label className="required" for="lastName">
                  Last Name
                </label>
                <input
                  className={errors?.lastName?.message ? "error" : " "}
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "Last Name is required",
                    maxLength: 100,
                  })}
                />
                <p>{errors?.lastName?.message}</p>
              </div>

              <div className="new-contact__control">
                <label for="prfeix">Prefix</label>
                <select id="prefix" {...register("prefix")}>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div className="new-contact__control">
                <label className="required" for="age">
                  Age
                </label>
                <input
                  className={errors?.age ? "error" : " "}
                  id="age"
                  type="number"
                  placeholder="Age"
                  {...register("age", {
                    required: "Age is required ",
                    min: {
                      value: 0,
                      message: "An age can't be a negative value",
                    },
                    max: {
                      value: 100,
                      message: "An age can't be more than 100",
                    },
                  })}
                />
                <p>{errors?.age?.message}</p>
              </div>

              <div className="new-contact__control">
                <label className="required" for="gender">
                  Gender
                </label>
                <select id="gender" {...register("gender", { required: true })}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </Card>
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label className="required" for="email">
                  Email
                </label>
                <input
                  className={errors?.email ? "error" : " "}
                  id="email"
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email is not valid",
                    },
                  })}
                />
                <p>{errors?.email?.message}</p>
              </div>
              <div className="new-contact__control">
                <label for="emailTag">Tag</label>
                <input
                  id="emailTag"
                  type="text"
                  placeholder="Tag"
                  {...register("emailTag", { maxLength: 100 })}
                />
              </div>
            </Card>
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label className="required" for="phone">
                  Phone
                </label>
                <input
                  className={errors?.phone ? "error" : " "}
                  id="phone"
                  type="number"
                  placeholder="Phone"
                  {...register("phone", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors?.phone?.type === "required" && <p>Phone is required</p>}
              </div>

              <div className="new-contact__control">
                <label for="phoneTag">Tag</label>
                <input
                  id="phoneTag"
                  type="text"
                  placeholder="Tag"
                  {...register("phoneTag", { maxLength: 100 })}
                />
              </div>
            </Card>
            <Card className="new-contact__controls">
              <div className="new-contact__control">
                <label className="required" for="country">
                  Country
                </label>
                <input
                  className={errors?.country ? "error" : " "}
                  id="country"
                  type="text"
                  placeholder="Country"
                  {...register("country", {
                    required: "Country is required",
                    maxLength: 100,
                  })}
                />
                {errors?.country?.message && <p>{errors?.country?.message}</p>}
              </div>

              <div className="new-contact__control">
                <label className="required" for="city">
                  City
                </label>
                <input
                  className={errors?.city ? "error" : " "}
                  id="city"
                  type="text"
                  placeholder="City"
                  {...register("city", {
                    required: "City is required",
                    maxLength: 100,
                  })}
                />
                {errors?.city?.message && <p>{errors?.city?.message}</p>}
              </div>

              <div className="new-contact__control">
                <label for="area">Area</label>
                <input
                  id="arge"
                  type="text"
                  placeholder="Area"
                  {...register("area", { maxLength: 100 })}
                />
              </div>

              <div className="new-contact__control">
                <label for="locationTag">Tag</label>
                <input
                  id="locationTag"
                  type="text"
                  placeholder="Tag"
                  {...register("locationTag", {
                    maxLength: 100,
                  })}
                />
              </div>
            </Card>
            <div className="new-contact__actions">
              {!isPreviewing && (
                <button
                  className="btn negative"
                  onClick={disableEditingHandler}
                  tybe="button"
                >
                  Cancel
                </button>
              )}

              {!isAdding && !isPreviewing && (
                <button className="btn positive" tybe="submit">
                  Save Changes
                </button>
              )}
              {isAdding && (
                <button className="btn positive" tybe="submit">
                  Add Contact
                </button>
              )}
            </div>

            {/* <input type="submit" /> */}
          </form>
        </fieldset>
      }{" "}
    </Card>
  );
};

export default ContactForm;
