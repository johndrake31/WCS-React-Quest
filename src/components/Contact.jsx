const Contact = (props) => {
    const { name, email, id, phone, deleteAble } = props;
    return (
      <div className="friend-item">
        <h3>Name: {name}</h3>
        <h4>Phone: {phone}</h4>
        <h4>Email: {email}</h4>
        {deleteAble && (
          <button
            onClick={() => {
              console.log(id);
            }}
          >
            Delete
          </button>
        )}
      </div>
    );
  };

  export default Contact