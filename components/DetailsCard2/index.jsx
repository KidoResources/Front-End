import React from "react";
import "./DetailsCard2.css";

class DetailsCard2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`details-card-2 ${className || ""}`}>
        <div className="detail-cards-info-1">
          <div className="cricriculm-1 inter-normal-black-32px">One on One Sessions</div>
          <p className="lorem-ipsum-dolor-si-2 inter-normal-black-12px">
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
      </div>
    );
  }
}

export default DetailsCard2;
