import React from "react";
import "./DetailsCard.css";

class DetailsCard extends React.Component {
  render() {
    const { rectangle7, className } = this.props;

    return (
      <div className={`details-card ${className || ""}`}>
        <div className="detail-cards-info">
          <div className="cricriculm inter-normal-black-32px">Cricriculm</div>
          <p className="lorem-ipsum-dolor-si-1 inter-normal-black-12px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare tincidunt nunc, vel faucibus
            mauris sollicitudin non. <br />
            Etiam a dolor consectetur eros scelerisque viverra. Sed ac est finibus, efficitur lectus id, dictum metus.{" "}
            <br />
            Suspendisse viverra, metus at rhoncus accumsan, ante augue egestas quam, sed interdum nisl tellus eu dui.{" "}
            <br />
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut congue, nibh non
            porta varius, turpis odio gravida nibh, eget laoreet ipsum dui vel ex. <br />
            Praesent sodales erat quis sapien tempus ornare. Praesent ac turpis rutrum, commodo velit pharetra, rhoncus
            erat. Nullam vel enim non lectus condimentum cursus. Proin vitae sem in erat efficitur auctor.
          </p>
        </div>
        <img className="rectangle-7" src={rectangle7} />
      </div>
    );
  }
}

export default DetailsCard;
