function Home(props) {
    console.log(props);
    var glo = props.globalInstance;

    glo.dispatch("person", [
        { name: "dqhan", age: 28 },
        { name: "zhangsan", age: 60 },
    ]);


    var handleLink = function handleLink(type) {
        switch (type) {
            case "blog":
                history.pushState(null, null, "/blog");
                break;
            case "collaborator":
                history.pushState(null, null, "/collaborator");
                break;
            case "login":
                history.pushState(null, null, "/login");
                break;
            case "vedio":
                history.pushState(null, null, "/vedio");
                break;
            case "common":
                history.pushState(null, null, "/");
                break;
        }
    };

    return <div>
        <ul>
            <li>
                <a onClick={() => handleLink("blog")}>
                    Blog
            </a>
            </li>
            <li>
                <a onClick={() => handleLink("collaborator")}>
                    Collaborator
            </a>
            </li>
            <li>
                <a onClick={() => handleLink("login")}>
                    Login
            </a>
            </li>
            <li>
                <a onClick={() => handleLink("vedio")}>
                    Vedio
            </a>
            </li>
            <li>
                <a onClick={() => handleLink("common")}>
                    首页
            </a>
            </li>
        </ul>
    </div>
}


export default Home