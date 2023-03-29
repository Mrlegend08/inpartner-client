const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(evt.target.elements);
    const [username, password] = evt.target.elements;
    const values = new FormData();
    values.append("username", username.value);
    values.append("password", password.value);
    try {
        const res = await fetch("https://news-api.deta.dev/login", {
            method: "POST",
            body: values,
        });
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};


<form onSubmit={(evt) => handleSubmit(evt)}>
    <input type='text' name='username' placeholder='Ismingiz' />

    <input type='password' name='password' placeholder='Parol' />

    <button type='submit'>Submit</button>
</form>;