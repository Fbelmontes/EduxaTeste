<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $metodo_pagamento = $_POST["metodo_pagamento"];
    $valor = $_POST["valor"];

    if ($metodo_pagamento == "cartao") {
        // Lógica para processamento de pagamento via cartão de crédito em até 8x
        // Construa os parâmetros para enviar ao Payzen
        $params = array(
            // Parâmetros específicos do Payzen para pagamento com cartão
            // ...
        );

        // Redirecione para o Payzen
        $payzen_url = 'https://secure.payzen.com.br/vads-payment/';
        echo '<form id="PayzenForm" method="post" action="' . $payzen_url . '" target="_blank">';
        foreach ($params as $key => $value) {
            echo '<input type="hidden" name="' . $key . '" value="' . $value . '">';
        }
        echo '</form>';
        echo '<script>document.getElementById("PayzenForm").submit();</script>';
    } elseif ($metodo_pagamento == "pix") {
        // Lógica para processamento de pagamento via PIX
        // Construa os parâmetros para enviar ao Payzen para pagamento via PIX
        // Redirecione para o Payzen para o pagamento via PIX
    } else {
        echo "Método de pagamento inválido!";
    }
}
?>
