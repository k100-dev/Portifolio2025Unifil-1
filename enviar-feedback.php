<?php
// Configuração do e-mail de destino
$destino = "enzodutra@edu.unifil.br"; 

// Captura dos dados do formulário
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$assunto = $_POST['assunto'] ?? 'Não especificado';
$mensagem = $_POST['mensagem'] ?? '';

// Monta o conteúdo do e-mail
$mensagemEmail = "
    Nome: $nome\n
    E-mail: $email\n
    Assunto: $assunto\n
    Mensagem:\n$mensagem
";

// Cabeçalhos do e-mail
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envia o e-mail
$enviado = mail($destino, "Feedback MathFly - $assunto", $mensagemEmail, $headers);

if ($enviado) {
    echo "<script>alert('Mensagem enviada com sucesso!'); window.location.href = 'fale-conosco.html';</script>";
} else {
    echo "<script>alert('Erro ao enviar. Tente novamente.'); window.history.back();</script>";
}
?>
