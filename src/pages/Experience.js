import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2004 - 2006"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Minha Escola </h3>
          <p>Ensino Médio: Escola Estadual Profº Wilson Roberto Simonini</p>
          <p>São Paulo SP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2008 - 2009"
        iconStyle={{ background: "#e9d35b", color: "#fff" }} 
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Representante de Atendimento </h3>
          <p>Mobitel S.A</p>
          <p>São Paulo SP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2008 - 2009"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Analista de Gravação </h3>
          <p>Mobitel S.A</p>
          <p>São Paulo SP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2010 - 2011"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Operador de CFTV </h3>
          <p>Brasil Risk</p>
          <p>São Paulo SP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2011 - 2012"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Operador de Segurança Eletrônica </h3>
          <p>TB Forte</p>
          <p>São Paulo SP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2012 - 2014"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Curso Técnico Eletrônica</h3>
          <p>Escola Técnica Sequencial</p>
          <p>São Paulo SP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2012 - 2015"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Auxiliar de Operações de Valores </h3>
          <p>TB Forte</p>
          <p>São Paulo SP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2015 - 2017"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Técnico em Eletrônica </h3>
          <p>TB Forte</p>
          <p>São Paulo SP</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2017 - 2020"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Instalador de Sistemas Eletrônicos </h3>
          <p>Ativa</p>
          <p>Santa Fé PR</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2020 - 2021"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Auxiliar Técnico III </h3>
          <p>Everest</p>
          <p>Maringá PR</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2022 Andamento"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Curso Desenvolvimento WEB FullStack </h3>
          <p>Trybe</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" 
        date="2023 Atualmente"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Técnico Manutenção de Alarmes II </h3>
          <p>Krattos</p>
          <p>Maringá PR</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  ) 
}

export default Experience;