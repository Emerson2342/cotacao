import React from 'react';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing'

import { styles } from './ModalClienteStyles';
import { useClientesContext } from '../Context/useClienteContext';

interface ModalClienteProps {
    handleClose: () => void;
}



export function ModalCliente({ handleClose }: ModalClienteProps) {

    const { clienteSelecionado } = useClientesContext();

    const html = `
<html lang="pt-br">
<head>
    <style>
        body {
            background-color: #43245c;
        }

        .header {
            flex-direction: row;
            display: flex;
            align-items: center;

        }

    .img{
       width: 5%;
        margin-top: 9px;
       flex-direction: column;
        display: flex;
    }
    .tel{
        width: 80%;
        font-size: 17px;
        color: #fff;
        text-align: left;       
        line-height: 4px; 
           
    }
    .tel p{
              line-height: 7px;
        text-align: left;
       
    }
    .headerTitle{
        width: 100%;
        font-size: 25px;
    }

    .iconSolid{
    width: 100%;
     }


        p {
            color: #fff;
            justify-content: baseline;
        }

        .beneficios {
            border-radius: 9px;
            padding: 5px;
            width: 40%;
            align-content: center;
            color: #fff;
            background-color: rgb(203, 199, 205, 0.1)
        }

        .linha {
            display: flex;
            justify-content: space-between;
            margin-top: -28px;
        }

        .cliente .linha p {
            display: flex;
            align-items: center;
            border-radius: 3px;
            padding: 3px;
            width: 32%;
            height: 40px;
            background-color: rgb(203, 199, 205, 0.1);

        }

        h4 {
            margin-top: -10px;
            font-size: 20px;
            padding: 15px;
            text-align: center;
            color: #fff;

        }

        .title {
            text-align: center;
            background-color: #E9A429;
            color: #43245c;
            border-radius: 3px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }

        .financeiroContainer p {
            width: 55%;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            margin-top: -10px;

            border-radius: 3px;
            color: #E9A429;
            background-color: rgb(203, 199, 205, 0.1)
        }

        .financeiroContainer {
            margin-top: 15px;

        }
        .finanContent{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            
        }
        .fin1{
            font-weight: bold;
            width: 50%;
            white-space: nowrap;
        }
     
    </style>
</head>

<body>
    <div class="headerTitle">    
        <p style="text-align: center;"><b>Proposta válida por 48 horas</b></p>
     </div>
    <div class="header">
        <div style="flex-direction: row;display: flex;justify-content: space-between; width: 70%;">
            <div style="width: 15%;">           
                <img src="../../assets/mariaIcon.jpg" alt="icone" class="image" style="width: 80px;margin-left: 20px;margin-top: -5px;">
            </div>
            <div class="img" style="margin-left: 20px;">
                <img src="../../assets/whats.png" alt="WhatsIcon" style="width: 23px;object-fit: contain;" >
                <img src="../../assets/whats.png" alt="WhatsIcon" style="width: 23px;object-fit: contain;margin-top: 5px;"  >
            </div>
            <div class="tel">
                <p> (61) 99623-4698 </p>
                <p>  protecaoveicular.mariaxavier</p>
            </div>
        </div>
        <div style="width: 10%;">
            <div class="iconSolid">
                <img src="../../assets/solidyIcon.jpg" alt="icone" style="object-fit: contain;width: 200px;height: 90px;" >
            </div>
        </div>
    </div>


    <h3 class="title" style="width: 100%;">PROPOSTA DE PROTEÇÃO PATRIMONIAL
        ASSOCIATIVO (SOCORRO MÚTUO)</h3>
    <h3 class="title">DADOS DO CLIENTE</h3>
    <div class="cliente">
        <div class="linha">
            <p style="width: 66%;">Nome: Emerson Ribeiro da Cunha</p>
            <p>Telefone: (61) 99835.4398</p>
           
        </div>
        <div class="linha">
            <p >Marca: vw - Wolksvagen</p>
            <p>Modelo: VOYAGE I MOTION 1.6 Mi Total Flex 8V</p>
            <p>Placa: JGG-0908</p>
        </div>
        <div class="linha" >
            <p>Ano Modelo: 2013</p>
            <p>Código FIPE: 993355-3</p>
            <p style="background-color: #43245c;"></p>
         </div>
 
    </div>

    <h3 class="title" style="margin-top: 25px;">BENEFÍCIOS VINCULADOS AO SEU PLANO</h3>

    <h3 style="text-align: center;color:#fff;">✅PLANO MASTER</h3>
    <div style="flex-direction: row; display: flex; justify-content: space-between;">
        <div class="beneficios">
            ▪ Proteção 100% da tabela Fipe<br />▪ Roubo / Furto<br />▪ Colisão<br />▪
            Incêndio proveniente de colisão<br />▪ Perda Total/Parcial<br />▪ Fenômenos da natureza<br />▪ 15 dias
            de carro reserva<br />▪60% de proteção para todos os vidros,
            faróis, lanternas e retrovisores <br /> para Veículos Nacionais e Importados<br />▪Futura Assistência
            Familiar - Titular<br />
        </div>
        <div class="beneficios">
            ▪Amigo Médico - Titular</br>
            <b>▪ASSISTÊNCIA 24Hs EM TODO TERRITÓRIO NACIONAL</b><br />▪ Guincho para Socorro de 1000 km a partir do
            ponto de saída do veiculo(500 ida e 500 volta)<br />▪ Guincho ilimitado p/ Colisão<br />▪ Socorro
            elétrico e
            mecânico<br />▪ Chaveiro 24h<br />▪ Hospedagem emergencial (Com direito a 1 diarias para até 5
            pessoas.)<br />▪ Táxi ou Uber<br />▪ Auxílio na troca de pneus furados
        </div>
    </div>
    <h4>✅ BENEFÍCIOS ADICIONAIS</h4>
    <div class="linha">
        <div style="width: 45%;text-align: center; line-height: 8px;">
            <p> ✅ Sem consulta SPC/SERASA;</p>
            <p>Perﬁl livre, (Qualquer pessoa habilitada </p>
            <p> pode conduzir o veículo):</p>
        </div>
        <div style="width: 45%;text-align: center; line-height: 8px;">

            <p><b>✅*RASTREAMENTO: INCLUSO</b></p>
            <p>para veículos acima de R$ 80 mil;</p>
            <p> Renovação anual automática e sem custos:</p>
        </div>
    </div>
    <div class="financeiroContainer">
        <p style="background-color: #E9A429; width: 100%; color: #43245c;"><b>INFORMAÇÕES FINANCEIRAS</p></b>
<div class="finanContent">
    <div class="fin1">
        <p>VALOR PROTEGIDO</p>
        <p style="background-color: #43245c;color: #fff;">R$ 176,00</p>

        <p>AJUDA PARTICIPATIVA</p>

        <p style="background-color: #43245c;color: #fff;">R$350,00</p>
    </div>
    <div class="fin1">
        <p>VALOR MÉDIO MENSAL</p>
        <p style="background-color: #43245c;color: #fff;">R$ 176,00</p>

        <p>ATIVAÇÃO DA PROTEÇÃO</p>

        <p style="background-color: #43245c;color: #fff;">R$350,00</p>
    </div>
    </div>
    </div>
    </div>
</body>

</html>

`;


    const printToFile = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({ html });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    };


    if (!clienteSelecionado) {
        return null;
    }

    const handleWhatsAppPress = () => {
        // Número de telefone para o qual você deseja enviar a mensagem no formato internacional
        const phoneNumber = clienteSelecionado.Telefone;
        // Abre o link no WhatsApp com o número de telefone
        Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
    };



    return (
        <View style={styles.container}>
            <View style={styles.context}>

                <View>
                    <Text style={styles.text}>Nome: {clienteSelecionado.Nome}</Text>
                    <Text style={styles.text}>Telefone: {clienteSelecionado.Telefone}</Text>
                    <Text style={styles.text}>Marca: {clienteSelecionado.Marca}</Text>
                    <Text style={styles.text}>Modelo: {clienteSelecionado.Modelo}</Text>
                    <Text style={styles.text}>Ano: {clienteSelecionado['Ano modelo']}</Text>
                    <Text style={styles.text}>Placa: {clienteSelecionado.Placa}</Text>
                    <Text style={styles.text}>Parcela: R$ {clienteSelecionado.Parcela}</Text>
                    <Text style={styles.text}>Vistoria: R${clienteSelecionado.Vistoria}</Text>
                    <Text style={styles.text}>Cota Participativa: {clienteSelecionado['Ajuda Participativa']}</Text>
                    <Text style={styles.text}>Valor: R$ {clienteSelecionado['Valor Protegido']}</Text>
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonContainer2}>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => {
                            printToFile()
                            handleClose()
                        }}>

                        <Text style={styles.textButton}> Gerar PDF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => handleClose()}>
                        <Text style={styles.textButton}> Fechar</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleWhatsAppPress()}>
                    <Text style={styles.textButton}> Enviar mensagem no WhatsApp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}