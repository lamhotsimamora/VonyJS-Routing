const template_contact = `<center>
<div class="card" style="width: 20rem;">
    <div class="card-body">
        <h4 class="card-title">
        This is Contact
        </h4>

        <h5 class="card-subtitle">
        This is Content Contact
        </h5>

        <p class="card-text">
        Lorem Ipsum quis ea in elit ullamco qui mollit ad sit proident commodo.
        </p>

            
        <a class="card-link" onclick="goTo('Login')">Login</a>
        <a class="card-link" onclick="goTo('Register')">Register</a>
        </div>
    </div>
</center>`;

const template_index = `<center>
<div class="card" style="width: 20rem;">
    <div class="card-body">
        <h4 class="card-title">
        This is Dashboard
        </h4>

        <h5 class="card-subtitle">
        This is Content Dashboard
        </h5>

        <p class="card-text">
        Lorem Ipsum quis ea in elit ullamco qui mollit ad sit proident commodo.
        </p>

            <a class="card-link" onclick="goTo('Login')">Login</a>
            <a class="card-link" onclick="goTo('Register')">Register</a>
        </div>
    </div>
</center>`;

const template_profile = `<center>
<div class="card" style="width: 20rem;">
    <div class="card-body">
        <h4 class="card-title">
        This is Profile
        </h4>

        <h5 class="card-subtitle">
        This is Content Profile
        </h5>

        <p class="card-text">
        Lorem Ipsum quis ea in elit ullamco qui mollit ad sit proident commodo.
        </p>

        <a class="card-link" onclick="goTo('Login')">Login</a>
        <a class="card-link" onclick="goTo('Register')">Register</a>
        </div>
    </div>
</center>`;

const template_register = `
    <center>
    <div class="card" style="width: 20rem;">
    <div  class="card-body">
    <div class="form-group">
    <label for="paperInputs1"></label>
    <input type="text" placeholder="Username" id="username">
    </div>
    <div class="form-group">
    <label for="paperInputs1"></label>
    <input type="text" placeholder="Password" id="password">
    </div>
    <button id="btn_register" class="btn-success-outline">Register</button>
    <button onclick="goTo('Login')" class="btn-primary-outline">Login</button>
    </div>
    </div>
    </center>
`;

const template_login = `
<center>
<div class="card" style="width: 20rem;">
<div  class="card-body">
<div class="form-group">
<label for="paperInputs1"></label>
<input type="text" placeholder="Username" id="username">
</div>
<div class="form-group">
<label for="paperInputs1"></label>
<input type="text" placeholder="Password" id="password">
</div>
<button id="btn_login" class="btn-success-outline">Login</button>
<button onclick="goTo('Register')" class="btn-primary-outline">Register</button>
</div>
</div>
</center>
`;