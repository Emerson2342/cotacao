import React from 'react';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

import { styles } from './ModalClienteStyles';
import { useClientesContext } from '../Context/useClienteContext';

interface ModalClienteProps {
    handleClose: () => void;
}


export function ModalCliente({ handleClose }: ModalClienteProps) {

    const { clienteSelecionado } = useClientesContext();



    const logoMaria = async (nomeImagem: string) => {
        try {
            const asset = Asset.fromModule(require(`../../assets/logoMaria.jpg`));
            await asset.downloadAsync(); // Baixa a imagem se ainda não estiver baixada

            const base64 = await FileSystem.readAsStringAsync(asset.localUri || asset.uri, { encoding: FileSystem.EncodingType.Base64 });
            return `data:image/jpeg;base64,${base64}`;
        } catch (error) {
            console.error(`Erro ao ler a imagem ${nomeImagem}: ${error}`);
            throw error;
        }
    };

    const imgSolid = async (nomeImagem: string) => {
        try {
            const asset = Asset.fromModule(require(`../../assets/imgSolid.jpg`));
            await asset.downloadAsync(); // Baixa a imagem se ainda não estiver baixada

            const base64 = await FileSystem.readAsStringAsync(asset.localUri || asset.uri, { encoding: FileSystem.EncodingType.Base64 });
            return `data:image/jpeg;base64,${base64}`;
        } catch (error) {
            console.error(`Erro ao ler a imagem ${nomeImagem}: ${error}`);
            throw error;
        }
    };
    const whatsIcon = async (nomeImagem: string) => {
        try {
            const asset = Asset.fromModule(require(`../../assets/whats.png`));
            await asset.downloadAsync(); // Baixa a imagem se ainda não estiver baixada

            const base64 = await FileSystem.readAsStringAsync(asset.localUri || asset.uri, { encoding: FileSystem.EncodingType.Base64 });
            return `data:image/jpeg;base64,${base64}`;
        } catch (error) {
            console.error(`Erro ao ler a imagem ${nomeImagem}: ${error}`);
            throw error;
        }
    };
    const instagramIcon = async (nomeImagem: string) => {
        try {
            const asset = Asset.fromModule(require(`../../assets/instagram.png`));
            await asset.downloadAsync(); // Baixa a imagem se ainda não estiver baixada

            const base64 = await FileSystem.readAsStringAsync(asset.localUri || asset.uri, { encoding: FileSystem.EncodingType.Base64 });
            return `data:image/jpeg;base64,${base64}`;
        } catch (error) {
            console.error(`Erro ao ler a imagem ${nomeImagem}: ${error}`);
            throw error;
        }
    };


    const printToFile = async () => {
        try {
            const logoMariaBase64 = await logoMaria('logoMaria.jpg');
            const imgSolidBase64 = await imgSolid('imgSolid.jpg');
            const whatsIconBase64 = await whatsIcon('whats.png');
            const instagramIconBase64 = await instagramIcon('instagram.png');


            const html = `
        <html lang="pt-br">
        <head>
            <style>
                body {
                    background-color: #43245c;
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
                    height: 35px;
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
                    width: 85%;
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
        
                .finanContent {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
        
                }        
                .header {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }        
                .maria {
                    width: 15%;
                    text-align: center;        
                }
        
                .titleHeader {
                    width: 70%;
                    text-align: center;
                    font-size: 30px;        
                }
        
                .solid {
                    width: 15%;
                    text-align: right;
                }
        
                .icones {
                    width: 20px;
                    object-fit: contain;
                    display: flex;
                    padding-top: 2px;
                }
        
                .textoContato {
                    padding-left: 5px;
                    line-height: 1.5;
                    font-size: 15px;
                    letter-spacing: 1.5px;
                }
        
                .logoSolid {
                    width: 110px;
                }
        
                .logoMaria {
                    width: 80px;
                    object-fit: contain;
                }
        
                .contato {
                    margin-top: -15px;
                    display: flex;
                    flex-direction: row;
                }
            </style>
        </head>
        
        <body>
            <div>
                <div class="header">
                    <div class="maria">
                        <img class="logoMaria" src="${logoMariaBase64}" alt="logo maria">
                    </div>
                    <div class="titleHeader">
                        <p>PROPOSTA VÁLIDA POR 48 HORAS</p>
                    </div>
                    <div class="solid">
                        <img src="${imgSolidBase64}" alt="imagem solid" class="logoSolid">
                    </div>
                </div>
                <div class="contato">
                    <div class="iconContato">
                        <img src="${whatsIconBase64}" alt="icone whatsapp" class="icones">
                        <img src="${instagramIconBase64}" alt="icone instagram" class="icones">
                    </div>
                    <div class="textoContato">
                        <p style=" margin: auto;">
                            (61) 99623-4698 </br>
                            protecaoveicular.mariaxavier</p>
                    </div>
                </div>
        
                <h3 class="title" style="width: 100%;">PROPOSTA DE PROTEÇÃO PATRIMONIAL
                    ASSOCIATIVO (SOCORRO MÚTUO)</h3>
                <h3 class="title" style="margin-top: -10px;">DADOS DO CLIENTE</h3>
                <div class="cliente">
                    <div class="linha">
                        <p style="width: 65.6%;">Nome: ${clienteSelecionado?.Nome}</p>
                        <p>Telefone: ${clienteSelecionado?.Telefone}</p>
        
                    </div>
                    <div class="linha">
                        <p>Marca: ${clienteSelecionado?.Marca}</p>
                        <p>Modelo: ${clienteSelecionado?.Modelo}</p>
                        <p>Placa: ${clienteSelecionado?.Placa}</p>
                    </div>
                    <div class="linha">
                        <p>Ano Modelo: ${clienteSelecionado?.['Ano modelo']}</p>
                        <p>Código FIPE: ${clienteSelecionado?.['Código FIPE']}</p>
                        <p>Ajuda Participativa: ${clienteSelecionado?.['Ajuda Participativa']}</p>
                    </div>
        
                </div>
        
                <h3 class="title" style="margin-top: -2px;">BENEFÍCIOS VINCULADOS AO SEU PLANO</h3>
        
                <h3 style="text-align: center;color:#fff; margin-top: -15px;">✅PLANO MASTER</h3>
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
                    <div style="width: 33%;white-space: nowrap;">
                        <p>VALOR PROTEGIDO</p>
                        <p style="background-color: #43245c;color: #fff;">R$ ${clienteSelecionado?.['Valor Protegido']}</p>
                    </div>
                    <div style="width: 33%;white-space: nowrap;">
                        <p>VALOR MÉDIO MENSAL</p>
                        <p style="background-color: #43245c;color: #fff;">R$ ${clienteSelecionado?.Parcela}</p>
                    </div>
                    <div style="width: 33%;white-space: nowrap;">
                        <p>ATIVAÇÃO DA PROTEÇÃO</p>
                        <p style="background-color: #43245c;color: #fff;">R$ ${clienteSelecionado?.Vistoria}</p>
                    </div>
                </div>
            </div>
        </div>
    </body>         
        
        </html>
        
        `;

            /*    const { uri } = await Print.printToFileAsync({ html: html });
               console.log('File has been saved to:', uri);
               await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
           } catch (error) {
               console.error('Erro ao imprimir o arquivo:', error);
           } */

            const { uri } = await Print.printToFileAsync({ html: html });
            console.log('File has been saved to:', uri);

            // Defina o nome desejado do arquivo
            const nomeArquivo = `${clienteSelecionado?.Nome}.pdf`;

            // Construa o novo caminho do arquivo
            const novoCaminho = FileSystem.documentDirectory + nomeArquivo;

            // Tente renomear o arquivo
            await FileSystem.moveAsync({
                from: uri,
                to: novoCaminho,
            });

            // Compartilhe o arquivo renomeado
            await shareAsync(novoCaminho, { UTI: '.pdf', mimeType: 'application/pdf' });

            // Deletar o arquivo após compartilhar
            await FileSystem.deleteAsync(novoCaminho);
        } catch (error) {
            console.error('Erro ao imprimir o arquivo:', error);

        };
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
                    <Text style={styles.textButton}> Conversar no WhatsApp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}