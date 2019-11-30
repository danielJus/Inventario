import React from "react";
// node.js library that concatenates classes (strings)
//import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import { chartOptions, parseOptions } from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };

  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row></Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Productos</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Imagen</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Responsable</th>
                      <th scope="col">Facultad</th>
                      <th scope="col">Sede</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;
