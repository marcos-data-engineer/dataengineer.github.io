<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'webcreatecode' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'webcreatec_add1' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', 'WOt7WQJ8L4bStdbUtbyh' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'mysql.webcreatecode.com.br' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wKBpq^xqjC,2f#Wm5<otO#XW1(xsE75!VSRCb5pauWJJNr|gM^SGU|z{$=s(IC=d' );
define( 'SECURE_AUTH_KEY',  'fr&AM$@TF4u4>N<-g;{`k^ScX)gu6Fyxgq{3so]cU6!KsCrQ:oYDcEzsv=W?Z,6b' );
define( 'LOGGED_IN_KEY',    'VTdSdpjV4nO&>$&~b.]>/=u?t%Nr:A|>Da]]M:Y_k9#Q>KvS00bA$2SzSnH/1N#Q' );
define( 'NONCE_KEY',        'UGfr,qN$d<x[d/6x-Nqd0~w0]wQ{|i|aEHx<65ThaOHERT*oJjc-eLFdC{YTdxe(' );
define( 'AUTH_SALT',        ' r@Xw-l!IHokGNT~R1!?<W5Oq7z;C@2z#MTN7zZ%O6IV|HI3|_H5Kw/DB!k]P8^n' );
define( 'SECURE_AUTH_SALT', 'x9h,)*]TCn/vc/+R4PtP}9Ch^^-#p.$V?&4H8!cK[O*=BmozQ1,P,m,X6k+#RDGl' );
define( 'LOGGED_IN_SALT',   'CRN YLd&RxxHd-7(GWP4~^QfCWzCYvDdk3B.bw-z$o*Nn7QO4~&6.S#viI,KDBlV' );
define( 'NONCE_SALT',       '+g#i-=@AJoR,(HG]j=29=Emra|@g}d}XhOkmx</viab]elCeGj/EWS#{Si M~ Jh' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
