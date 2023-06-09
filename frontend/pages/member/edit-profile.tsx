import Button from "../../components/Atom/button";
import Input from "../../components/Atom/Input";
import Sidebar from "../../components/Organism/Sidebar/sidebar";

export default function EditProfie() {
  return (
    <>
      <section className="edit-profile overflow-auto">
        {/* sidebar */}
        <Sidebar />
        {/* sidebar */}
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <img
                      src="/img/avatar-1.png"
                      width="90"
                      height="90"
                      className="avatar img-fluid"
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <img src="/icon/avatar.svg" alt="avatar-upload" />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <img
                        src="/icon/avatar.svg"
                        alt="avatar-upload"
                        width="90"
                        height="90"
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    id="name"
                    name="name"
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="pt-30">
                  <Input
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="pt-30">
                  <Input
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <Button type="submit" title="Save My Profile" />
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
