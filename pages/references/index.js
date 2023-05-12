import { Button } from "../../components/Button";
import { MdPlayArrow } from 'react-icons/md';
import { useState } from 'react';
import { useRouter } from "next/router";
import { Bubble } from "../../components/Bubble";

function References() {
  const router = useRouter();

  const goToNext = () => {
    router.push({
      pathname: '/select'
    });
  }

  return <div style={{ height: '100vh', position: 'relative' }}>
    <div style={{
      zIndex: '2',
      position: 'absolute',
      bottom: '0',
      top: '0',
      left: '0',
      overflow: 'hidden'
    }}>
      <img
        src="background-colorless.png" />
    </div>
    <div style={{
      position: 'absolute',
      zIndex: '3',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      opacity: '0.6',
      bottom: '0',
      top: '0',
      left: '0',
      overflow: 'hidden'
    }}></div>
    <div style={{
      zIndex: '5',
      position: 'absolute',
      bottom: '30px',
      right: '30px',
    }}>
      <Button onClick={goToNext} style={{
        paddingTop: '20px',
        paddingBottom: '20px',
        marginTop: 'auto',
        marginLeft: '20px'
      }}>
        <MdPlayArrow size="40px" />
      </Button>
    </div>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      msTransform: 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
      zIndex: '12'
    }}>
      <Bubble className="column" style={{
        height: '80vh',
        overflow: 'auto'
      }}>
        BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. <b>Manual de gestação de alto risco.</b> Ministério da Saúde, Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas. – Brasília: Ministério da Saúde, 2022. Disponível em: <a href="https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/manual-de-gestacao-de-alto-risco-ms-2022/">https://portaldeboaspraticas.iff.fiocruz.br/atencao-mulher/manual-de-gestacao-de-alto-risco-ms-2022/</a>
        <br /><br />
        BRASIL. Ministério da Saúde. <b>Protocolos da Atenção Básica: Saúde das Mulheres.</b> Ministério da Saúde, Instituto Sírio- Libanês de Ensino e Pesquisa – Brasília: Ministério da Saúde, 2016. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/protocolos_atencao_basica_saude_mulheres.pdf">https://bvsms.saude.gov.br/bvs/publicacoes/protocolos_atencao_basica_saude_mulheres.pdf</a>
        <br /><br />
        BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. <b>Cadernos de Atenção Básica - Atenção ao pré-natal de baixo risco.</b> Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. – Brasília: Editora do Ministério da Saúde, 2012. Disponível em: <a href="http://www.coren-se.gov.br/wp-content/uploads/2019/05/cadernos_atencao_basica_32_prenatal.pdf">http://www.coren-se.gov.br/wp-content/uploads/2019/05/cadernos_atencao_basica_32_prenatal.pdf</a>
        <br /><br />
        COREN/SC – CONSELHO REGIONAL DE ENFERMAGEM DE SANTA CATARINA. <b>Protocolo de Enfermagem Volume 3 - Saúde da Mulher: Acolhimento às demandas da mulher nos diferentes ciclos de vida.</b> Florianópolis, 2016. Disponível em: <a href="https://www.corensc.gov.br//wp-content/uploads/2018/04/Protocolo-de-Enfermagem-Volume-3.pdf">https://www.corensc.gov.br//wp-content/uploads/2018/04/Protocolo-de-Enfermagem-Volume-3.pdf</a>
        <br /><br />
        SANTA CATARINA. Diretoria de Atenção Primária à Saúde. Secretaria Estadual de Saúde do Estado de Santa Catarina. <b>Linha de Cuidado Materno Infantil.</b> Florianópolis, 2019. Disponível em: <a href="https://www.saude.sc.gov.br/index.php/informacoes-gerais-documentos/redes-de-atencao-a-saude-2/rede-aten-asaude-materna-e-infantil-rede-cegonha/16093-linha-de-cuidado-materno-infantil/file">https://www.saude.sc.gov.br/index.php/informacoes-gerais-documentos/redes-de-atencao-a-saude-2/rede-aten-asaude-materna-e-infantil-rede-cegonha/16093-linha-de-cuidado-materno-infantil/file</a>
        <br /><br />
        SANTA CATARINA. Diretoria de Atenção Primária à Saúde. <b>Instrumento de Estratificação de Risco Gestacional.</b> Florianópolis, 2ª ed; 2022. Disponível em: <a href="https://www.saude.sc.gov.br/index.php/informacoes-gerais-documentos/atencao-basica/manuais-e-publicacoes-ab-aps/20141-instrumento-de-estratificacao-de-risco-gestacional/file">https://www.saude.sc.gov.br/index.php/informacoes-gerais-documentos/atencao-basica/</a>
      </Bubble>
    </div>
  </div>;
}
