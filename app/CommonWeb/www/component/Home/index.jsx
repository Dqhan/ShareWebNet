function Home(props) {
    console.log(props);
    var glo = props.globalInstance;

    glo.dispatch("person", [
        { name: "dqhan", age: 28 },
        { name: "zhangsan", age: 60 },
    ]);


    var handleLink = function handleLink(type) {
        switch (type) {
            case "app1":
                history.pushState(null, null, "/react-1");
                break;
            case "app2":
                history.pushState(null, null, "/react-2");
                break;
        }
    };

    return <div>
        <h1>common app1</h1>
        <ul>
            <li>
                <a onClick={() => handleLink("app1")}>
                    react app1
            </a>
            </li>
            <li>
                <a onClick={() => handleLink("app2")}>
                    react app2
            </a>
            </li>
        </ul>
    </div>
}


export default Home