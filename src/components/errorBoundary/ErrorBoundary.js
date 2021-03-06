import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

// ПРЕДОХРАНИТЕЛИ ЛОВЯТ ОШИБКИ В В МЕТОДЕ RENDER, МЕТОДАХ ЖИЗНЕННОГО ЦИКЛА И В КОНСТРУКТОРАХ

class ErrorBoundary extends Component {
  state = {
    error: false
  }

  // static getDerivedStateFromError(error) {  //только обновляет состояние
  //   return {error: true};
  // }

  componentDidCatch(error, errorinfo) {
    console.log(error, errorinfo);
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage/>

    }

    return this.props.children;
  }
}

export default ErrorBoundary;