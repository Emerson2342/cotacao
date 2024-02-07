import React from 'react';
import { View, Text, TouchableOpacity, Linking, Share } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';


import { styles } from './ModalSalvoStyles';
import { useClientesContext } from '../Context/useClienteContext';


interface ModalSalvoProps {
    handleClose: () => void;
}


export function ModalSalvo({ handleClose }: ModalSalvoProps) {

    const { ultimoCliente, clienteSelecionado } = useClientesContext();



    const handleWhatsAppPress = () => {
        // Número de telefone para o qual você deseja enviar a mensagem no formato internacional
        const phoneNumber = ultimoCliente?.Telefone;

        // Abre o link no WhatsApp com o número de telefone
        Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
    };





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
                        <p style="width: 65.6%;">Nome: ${ultimoCliente?.Nome}</p>
                        <p>Telefone: ${ultimoCliente?.Telefone}</p>
        
                    </div>
                    <div class="linha">
                        <p>Marca: ${ultimoCliente?.Marca}</p>
                        <p>Modelo: ${ultimoCliente?.Modelo}</p>
                        <p>Placa: ${ultimoCliente?.Placa}</p>
                    </div>
                    <div class="linha">
                        <p>Ano Modelo: ${ultimoCliente?.['Ano modelo']}</p>
                        <p>Código FIPE: ${ultimoCliente?.['Código FIPE']}</p>
                        <p>Ajuda Participativa: ${ultimoCliente?.['Ajuda Participativa']}</p>
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
                        <p style="background-color: #43245c;color: #fff;">R$ ${ultimoCliente?.['Valor Protegido']}</p>
                    </div>
                    <div style="width: 33%;white-space: nowrap;">
                        <p>VALOR MÉDIO MENSAL</p>
                        <p style="background-color: #43245c;color: #fff;">R$ ${ultimoCliente?.Parcela}</p>
                    </div>
                    <div style="width: 33%;white-space: nowrap;">
                        <p>ATIVAÇÃO DA PROTEÇÃO</p>
                        <p style="background-color: #43245c;color: #fff;">R$ ${ultimoCliente?.Vistoria}</p>
                    </div>
                </div>
            </div>
        </div>
    </body>         
        </html>
        
        `;

            /*      const { uri } = await Print.printToFileAsync({ html: html });
                 console.log('File has been saved to:', uri);
                 await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
             } catch (error) {
                 console.error('Erro ao imprimir o arquivo:', error);
             } */

            const { uri } = await Print.printToFileAsync({ html: html });
            console.log('File has been saved to:', uri);

            // Defina o nome desejado do arquivo
            const nomeArquivo = `${ultimoCliente?.Nome}.pdf`;

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


    return (
        <View style={styles.container}>
            <View style={styles.context}>
                <View ><Text style={styles.title}>Cotação Salva</Text>
                    <Text style={styles.text}>Nome: {ultimoCliente?.Nome} </Text>
                    <Text style={styles.text}>Carro: {ultimoCliente?.Modelo} </Text>
                    <Text style={styles.text}>Valor: {ultimoCliente?.['Valor Protegido']} </Text>


                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            printToFile()
                            handleClose()

                        }}>
                        <Text style={styles.textButton}> Gerar PDF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleWhatsAppPress()
                            handleClose()
                        }}>
                        <Text style={styles.textButton}>Conversar no WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleClose()}>
                        <Text style={styles.textButton}> Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
