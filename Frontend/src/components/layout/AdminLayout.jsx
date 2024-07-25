import Sidebar from "../admin/sidebar/Sidebar";
import Header from "../admin/header/Header";
import Footer from "../admin/footer/Footer";

export const AdminLayout = (props) => {
  return (
    <>
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="page-content-wrap">
          {props.children}

          <Footer />
        </div>
      </div>
    </>
  );
};
