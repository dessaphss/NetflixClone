<template>
  <div class="login">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo-netflix.png" alt="Logo Netflix">
      </div>
    </div>
    <section>
      <div class="login-content">
        <div class="login-form-main">
          <h1>Entrar</h1>
          <form class="login-form">
            <div class="input-email-phone">
              <input type="text" name="userLoginId" placeholder="Email ou número de telefone">
              <!-- <label for="">Email ou número de telefone</label> -->
            </div>
            <div class="input-error">
              <span>Informe um email ou número de telefone válido</span>
            </div>
            <div class="input-password">
              <input type="password">
              <!-- <label for="">Senha</label> -->
              <button title="Exibir senha">MOSTRAR</button>
            </div>
            <button class="login-button">Entrar</button>
            <div class="login-form-help">
              <div class="login-remember">
                <input type="checkbox" class="remember">
                <label>
                  <span>Lembre-se de mim</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NxLogin'
}
</script>
<style></style>
