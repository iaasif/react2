export default function Friend({friend}) {
    console.log(friend);
    const { name, email } = friend;
    return (
        <div className='box' >
            <h3>
                {/* name */}
                name: {name}
            </h3>
            <p>
                {/* email */}
                email: {email} 
            </p>
        </div>
    )
}