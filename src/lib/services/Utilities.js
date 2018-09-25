class Utilities {
    static getRandomBaseClass = () => {
      return `simplekeyboard_id-${Math.random().toString(36).substring(7)}`;
    }

    static parseProps = (props) => {
      return Object.assign({}, props, {
        theme: `simple-keyboard ${props.theme}`
      });

    }
}

export default Utilities;