import { useNavigate } from "react-router-dom";



const InstallationDetails = () => {
    console.log('🚀 TST bayyybeee');
    const navigate = useNavigate();

    return (
        <>
          <button className="home-button" onClick={() => navigate('/')}>Home</button>
        <div className="installation-detail-container">
            <h2> 🚀 TestScript Installation 🚀</h2>
        </div>
        </>
    )

};

export default InstallationDetails;
