import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return ( 
    <div className="careers-layout">
      <h1>careers</h1>
      <div className="careers">
        <Outlet />
      </div>
    </div>
  );
}
 
export default CareersLayout;