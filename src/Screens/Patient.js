import React from 'react';

class Patient extends React.Component {
    state = {
      bloodBanks: [],
      error: null,
    };
  
    handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const requestData = {
        bloodGroup: formData.get('bloodGroup'),
      };
  
      try {
        const response = await fetch(`/api/patients/${this.props.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any necessary authentication headers
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.ok) {
          const data = await response.json();
          this.setState({ bloodBanks: data.bloodBanks, error: null });
        } else {
          this.setState({ error: 'Request submission failed' });
        }
      } catch (error) {
        this.setState({ error: 'An error occurred: ' + error.message });
      }
    };

    render() {
        return (
            <div>
                <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
        <img src="https://bloodwarriors.in/wp-content/uploads/2023/01/cropped-BWI-1-150x150.png" style={{ width:"105px", height:"105px" }} alt="Blood Warriors" />
        <h3 className='text-danger'>The bond of blood is stronger than anything</h3>

                        {/* <Link className="navbar-brand" to="/">Blood Warriors</Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
                <h1 className='text-danger text-center'>Patient Blood Request</h1>
                <br></br>
                <br></br>
                <div className='container text-center'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                        <i className="fas fa-user"></i>Patient Name:
                    </label>
                    <input type="text" id="name" name="name" required />
                    <br></br>
                    <br></br>

                    <label htmlFor="bloodGroup">
                        <i className="fas fa-tint"></i>Required Blood Group:
                    </label>
                    <select id="bloodGroup" name="bloodGroup" required>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label htmlFor="contact">
                        <i className="fas fa-phone"></i>Contact Number:
                    </label>
                    <input type="text" id="contact" name="contact" required />
                    <br></br>
                    <br></br>

                    <label htmlFor="location">
                        <i className="fas fa-map-marker-alt"></i>Blood Bank Location:
                    </label>
                    <input type="text" id="location" name="location" required />
                    <br></br>
                    <br></br>

                    <input type="submit" value="Submit Request" />
                </form>
            </div>

                </div>

                
        );
    }
}

export default Patient;