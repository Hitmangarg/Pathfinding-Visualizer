import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedObject: "Select Object",
      selectedMazeAlgorithm: "Maze Algorithm",
      selectedPathAlgorithm: "Path Algorithm"
    };
  }
  render() {
    return (
      <Navbar class="navbar navbar-light" style={{"background-color": "blue"}}>
        <div style={{"margin-left":"10px","width":"25%"}}>
          <h3 style={{"color":"black"}}>PATHFINDING VISUALIZER</h3>
        </div>
        <Container>
          <Col>
            <Dropdown className="nav-element" variant="light">
              <Dropdown.Toggle
                className="nav-element"
                variant="light"
                id="dropdown-basic"
              >
                {this.state.selectedObject}
              </Dropdown.Toggle>

              <Dropdown.Menu className="nav-element">
                {["Start","Weight", "Wall","End"].map(object => {
                  return (
                    <Dropdown.Item
                      onClick={() => {
                        this.props.getObject(object.toLowerCase());
                        this.setState({
                          selectedObject: object
                        });
                      }}
                      key={object}
                    >
                      {object}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/*  */}
          <Col>
            <Dropdown as={ButtonGroup} variant="light" className="nav-element">
              <Button onClick={this.props.generateMaze} variant="light">
                {this.state.selectedMazeAlgorithm}
              </Button>

              <Dropdown.Toggle
                split
                variant="light"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                {[
                  "Randomized Verticals",
                  "Randomized Horizontals",
                  "Recursive Division"
                ].map(mazeAlgorithm => {
                  return (
                    <Dropdown.Item
                      key={mazeAlgorithm}
                      onClick={() => {
                        this.props.getMazeAlgorithm(
                          mazeAlgorithm.replace(/ /g, "")
                        );
                        this.setState({
                          selectedMazeAlgorithm: mazeAlgorithm
                        });
                      }}
                    >
                      {mazeAlgorithm}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/*  */}

          <Col>
            <Dropdown as={ButtonGroup} variant="light" className="nav-element">
              <Button onClick={this.props.findPath} variant="light">
                {this.state.selectedPathAlgorithm}
              </Button>

              <Dropdown.Toggle
                split
                variant="light"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                {[
                  "Breadth First Search",
                  "Depth First Search",
                  "Dijkstra",
                ].map(pathAlgorithm => {
                  return (
                    <Dropdown.Item
                      key={pathAlgorithm}
                      onClick={() => {
                        this.props.getShortPathAlgorithm(
                          pathAlgorithm.replace(/ /g, "")
                        );
                        this.setState({
                          selectedPathAlgorithm: pathAlgorithm
                        });
                      }}
                    >
                      {pathAlgorithm}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button variant="light" className="nav-element">
              Distance <Badge variant="dark">{this.props.distance}</Badge>
            </Button>
          </Col>

          
          <Col>
            <Button
              variant="light"
              onClick={() => {
                this.props.clearAnimation();
              }}
              className="nav-element"
            >
              Clear Animation
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              onClick={() => {
                this.props.clearSketch();
              }}
              className="nav-element"
            >
              Clear
            </Button>
          </Col>
        </Container>
      </Navbar>
    );
  }
}
