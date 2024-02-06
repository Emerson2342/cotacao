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
        h1 {
            color: #E9A429;
            text-align: center;
        }

        h3,
        h4 {

            font-size: 20px;
            text-align: center;
            color: green
        }


        p {
            color: green;
            justify-content: baseline;
        }

        .beneficios {
            background-color: #FFF;
            border-radius: 9px;
            padding: 5px;
            width: 40%;
            align-content: center;
            color: green;
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
        }

        .dados {
            background-color: #E9A429;
            color: green;
            border-radius: 3px;
            align-content: center;

        }

        .title {
            background-color: #E9A429;
            color: green;
            border-radius: 3px;
            align-content: center;
            padding: 3px;
        }

        .financeiro p {
            text-align: center;
            margin-top: -12px;
            background-color: #E9A429;
            border-radius: 3px;
        }
    </style>
</head>

<body>
    <div style="text-align: end;">
        <p>Consultora: Maria Aurinete Xavier Arruda </br>
            Telefone.:(61) 99623-4698 </br>
            <b>Proposta válida apenas com o aceite e vistoria da associação</b>
        </p>
    </div>
    <h1 class="title">PROPOSTA DE PROTEÇÃO PATRIMONIAL
        ASSOCIATIVO (SOCORRO MÚTUO)</h1>

    <h4 class="dados">DADOS DO CLIENTE</h4>

    <div class="cliente">
        <div class="linha">
            <p>Nome: Emerson Ribeiro da Cunha</p>
            <p>Telefone: (61) 99835.4398</p>
            <p> Email: lyncoln_erc@hotmail.com</p>
        </div>
        <div class="linha">
            <p>Marca: vw - Wolksvagen</p>
            <p>Modelo: VOYAGE I MOTION 1.6 Mi Total Flex 8V</p>
            <p>Placa: JGG-0908</p>
        </div>
        <div class="linha">
            <p>Ano Modelo: 2013</p>
            <p>Código FIPE: 993355-3</p>
            <p>Categoria: Nacional Popular</p>
        </div>
        <div class="linha">
            <p>Valor Protegido: R$ 45.00,00</p>
            <p>Ajuda Participativa: 5% não sendo inferior a R$1.200,00</p>
        </div>
        <div class="linha">

        </div>
    </div>

    <h3 class="dados">BENEFÍCIOS VINCULADOS AO SEU PLANO</h3>

    <h3>PLANO MASTER</h3>
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
    <div class="financeiro">
        <p class="title" style="text-align: center;"><b>INFORMAÇÕES FINANCEIRAS</p></b>

        <p>VALOR MÉDIO
            MENSALIDADE
        <p style="background-color: #fff;"><b>R$ 176,00</b></p>

        <p>CADASTRO, VISTORIA E ATIVAÇÃO DA
            PROTEÇÃO

        <p style="background-color: #fff;"> <b>R$350,00</b></p>
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
                    <Text style={styles.text}>Franquia: R${clienteSelecionado.Franquia}</Text>
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