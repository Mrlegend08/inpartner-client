import React from "react";
import "./Register.scss";
import { Formik } from "formik";
import Field from "../../components/Field";
import { RegisterContext } from "../../context/registerContext";
import { API_PATH } from "../../utils/utils";
import { toast } from "react-toastify";
import Button from "../../components/Button";

const Register = () => {
  const { region, setRegion } = React.useContext(RegisterContext);

  React.useEffect(() => {
    (async () => {
      // try {
      //     const res = await fetch(`${API_PATH}get-regions`);
      //     const data = await res.json();
      //     console.log(data);
      // } catch (error) {
      //     toast.error(error.message);
      // }
    })();
  }, []);
  return (
    <>
      <section className="register">
        <div className="container">
          <div className="register__text">
            <h2 className="__text--title">Ro’yhatdan O’tish</h2>
            <p className="__text--desc">
              Xush kelibsiz! E’lon berish uchun ro’yhatdan o’ting.
            </p>
          </div>

          <div className="register__form">
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                phoneNumber: "",
                profession: "",
                summary: "",
                regionId: "",
                districtId: "",
                email: "",
                password: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="d-flex">
                    <div className="w-100 me-4">
                      <Field
                        labelID="firstname"
                        labelText="Ism"
                        className="register-form__username-input"
                        type="text"
                        name="firstname"
                        onChange={handleChange}
                        value={values.firstname}
                        required
                      />
                    </div>
                    <div className="w-100">
                      <Field
                        labelID="lastname"
                        labelText="Familiya"
                        className="register-form__lastname-input"
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                        value={values.lastname}
                        required
                      />
                    </div>
                  </div>

                  <Field
                    labelID="phoneNumber"
                    labelText="Telefon Raqam"
                    className="register-form__phone-input"
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={values.phoneNumber}
                    required
                  />

                  <div className="d-flex">
                    <div className="w-100 me-4">
                      <label htmlFor="regionId">Turar joyingiz</label>
                      <select
                        className="register__form-select"
                        name="regionId"
                        id="regionId"
                        onChange={handleChange}
                        value={values.regionId}
                        required
                      >
                        {region.length > 0 &&
                          region &&
                          region.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="w-100">
                      <label htmlFor="proffesion">Kasbingiz</label>
                      <select
                        className="register__form-select"
                        name="proffesion"
                        id="proffesion"
                        onChange={handleChange}
                        value={values.profession}
                        required
                      >
                        <option value="Frontend Developer">
                          Frontend Developer
                        </option>
                        <option value="Backend Developer">
                          Backend Developer
                        </option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="w-100 me-4">
                      <Field
                        labelID="github"
                        labelText="Github"
                        className="register-form__github-input"
                        type="url"
                        name="github"
                        onChange={handleChange}
                        value={values.github}
                        required
                      />
                    </div>
                    <div className="w-100">
                      <Field
                        labelID="twitter"
                        labelText="Twitter"
                        className="register-form__twitter-input"
                        type="url"
                        name="twitter"
                        onChange={handleChange}
                        value={values.twitter}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="w-100 me-4">
                      <Field
                        labelID="linkedin"
                        labelText="Linkedin"
                        className="register-form__linkedin-input"
                        type="url"
                        name="linkedin"
                        onChange={handleChange}
                        value={values.linkedin}
                        required
                      />
                    </div>
                    <div className="w-100">
                      <Field
                        labelID="telegram"
                        labelText="Telegram"
                        className="register-form__telegram-input"
                        type="url"
                        name="telegram"
                        onChange={handleChange}
                        value={values.telegram}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="w-100 me-4">
                      <Field
                        labelID="email"
                        labelText="Email"
                        className="register-form__email-input"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        required
                      />
                    </div>
                    <div className="w-100">
                      <Field
                        labelID="password"
                        labelText="Password"
                        className="register-form__password-input"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="w-50 pe-3 me-4">
                      <Field
                        labelID="pass"
                        labelText="Email"
                        className="register-form__email-input"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    className="register__btn ms-auto d-block"
                    type="submit"
                    disabled={isSubmitting}
                    text="Saqlash"
                  />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
