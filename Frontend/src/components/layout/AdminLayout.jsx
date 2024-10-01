import Sidebar from "../admin/common/sidebar/Sidebar";
import Header from "../admin/common/header/Header";
import Footer from "../admin/common/footer/Footer";

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
