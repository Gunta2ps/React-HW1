const sty1 = {background:'#23272F', color:'white', padding:'10px'}
const sty2 = {background:'#343A46', padding:'14px', borderRadius:'12px'}
const sty3 = {color:'#F5F5F5'}

function ProfilePhoto(){
    return(
        <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
    )
}

function NameAndEmail(){
    return(
        <div className="name">
            <h3>Julienne Moore</h3>
            <h4>julianne.moore@company.com</h4>
        </div>
    )
}

function Statusbox(){
    return(
        <div className="status-box">
            <div className="status">
                <h2>25</h2>
                <h3>Posts</h3>
            </div>
            <div className="status">
                <h2>350</h2>
                <h3>Following</h3>
            </div>
            <div className="status">
                <h2>1.5K</h2>
                <h3>Followers</h3>
            </div>
        </div>
    )
}


function Card(){
    return(
    <div class='card'>
      <ProfilePhoto />
      <NameAndEmail />
      <Statusbox />
    </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<Card />)