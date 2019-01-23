import React, {
    PureComponent
} from "react";
import classes from "./App/css";
import Persons from "../components/Persons/Persons";
import Cockpit from "components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import withClass from "..hoc/withClass";
import cockpit from "../../../00 Apka/cmp-deep-dive--08-react-finished/src/components/Cockpit/Cockpit";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log("[App.js] Inside Constructor", props);
        this.state = {
            Persons: [{
                    id: "hej",
                    name: "Andre",
                    age: 11
                },
                {
                    id: "Siema",
                    name: "Bambo",
                    age: 12
                },
                {
                    id: "Elo",
                    name: "Cecilia",
                    age: 21
                }
            ],
            otherState: "some other value",
            showPersons: false,
            toggleClicked: 0,
            authenticated: false
        };
    }

    componentWillMount() {
        console.log("[App.js] Inside componentWillMount()");
    }

    componentDidMount() {
        console.log("[App.js] Inside componentDidMount()");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE App.js] Inside ComponentWillUpdate", nextProps, nextState);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(
            "[UPDATE App.js] Inside getDerivedStateFromProps ",
            nextProps,
            prevState
        );
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log(
            "[UPDATE App.js] Inside getSnapshotBeforeUpdate"
        );
    }
    componentDidUpdate() {
        console.log("[UPDATE App.ks] Inside componentDidUpdate");
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.Persons.findIndex(p => {
            return p.id === ;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            };
        });
    };

    loginHandler = () => {
        this.setState({
            euthenticated: true
        });
    };

    render() {
        console.log("[App.js] Inside render()");
        let persons = null;

        if (this.state.persons) {
            persons = ( <
                Persons persons = {
                    this.state.persons
                }
                clicked = {
                    this.deletePersonHandler
                }
                changed = {
                    this.nameChangeHandler
                }
                />
            );
        }

        return ( < Aux >
            <
            button onClick = {
                () => {
                    this.setState({
                        showPersons: true
                    });
                }
            } >
            Show <
            /button> <
            cockpit appTitle = {
                this.props.title
            }
            showPersons = {
                this.state.showPersons
            }
            persons = {
                this.state.persons
            }
            login = {
                this.loginHandler
            }
            clicked = {
                this.togglePersonsHandler
            }
            /> <
            AuthContext.Provider value = {
                this.state.authenticated
            } > {
                persons
            } < /AuthContext.Provider> </
            Aux >
        }
    );
}

export default withClass(App, classes.App);