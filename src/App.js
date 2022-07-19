import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";
import Base from "./components/base/Base";
import Work from "./components/work/Work";
import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import Mobile from "./components/base/Mobile";
import Error from "./components/error404/Error";

export class App extends Component {
  state = {
    menu: ["active_menu", " "]
  };

  activeMenu(id) {
    switch (id) {
      case 0:
        this.setState({ menu: ["active_menu", " ", " "] });
        break;

      case 1:
        this.setState({ menu: [" ", "active_menu", " "] });
        break;

      case 2:
        this.setState({ menu: [" ", " ", "active_menu"] });
        break;

      default:
    }
  }

  setFullscreen(value) {
    this.setState({...this.state, fullScreen: value})
  }

  render() {

    return (
      <div className='App'>
        <Router>
          <div className='mobile_container' id={this.state.fullScreen ? "fullscreen" : ''}>
            <div>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) => <Mobile menu={this.state.menu} fullScreen={() => this.setFullscreen} />}
                />

                <Route
                  exact
                  path='/aboutme'
                  render={(props) => (
                    <Aboutme
                      menu={this.state.menu}
                      activeMenu={() => this.activeMenu}
                    />
                  )}
                />

                <Route
                  exact
                  path='/contact'
                  render={(props) => (
                    <Contact
                      menu={this.state.menu}
                      activeMenu={() => this.activeMenu}
                    />
                  )}
                />

                <Route component={Error} />
              </Switch>
            </div>

            <Work
            menu={this.state.menu}
            activeMenu={() => this.activeMenu}/>

            <Contact
            menu={this.state.menu}
            activeMenu={() => this.activeMenu} />
          </div>

          <div className='container'>
            <section className='fixed'>
              <Base menu={this.state.menu} />
            </section>

            <main className='main'>
              <div className='pages_container'>
                <Switch>
                  <Route
                    exact
                    path='/'
                    render={(props) => (
                      <Work
                        menu={this.state.menu}
                        activeMenu={() => this.activeMenu}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/aboutme'
                    render={(props) => (
                      <Aboutme
                        menu={this.state.menu}
                        activeMenu={() => this.activeMenu}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/contact'
                    render={(props) => (
                      <Contact
                        menu={this.state.menu}
                        activeMenu={() => this.activeMenu}
                      />
                    )}
                  />

                  <Route component={Error} />
                </Switch>
              </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
