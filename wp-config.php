<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'school-db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '.Zj5fH}JZ0H0iFGO@+nnRY3FX2xB?b!p)q?}#%Q6[QjRH5%u~h.w33$KziwaR-T2' );
define( 'SECURE_AUTH_KEY',  'f9mLFxs=XX6>pb,M4?&^#P}RpSRe0?&meE lCGJ*6wkGvl#N]b~l|0PKa56{t>k^' );
define( 'LOGGED_IN_KEY',    'Kkh?wH9.M4FqN&|i+0-)^W!#Z[Ts it}`e]UMZZD%)]8ZvzJ$R6OSTIETlW]j?Jw' );
define( 'NONCE_KEY',        'cz2x@1]E_@-A^C<#?!iK_0$@|BmLMI.gHF9rM=Gd|uoQizs@[BTZ9&8,:*obGSNY' );
define( 'AUTH_SALT',        'y^)- V/-.kEWeck![{e|yXP<*C!%C>c?0WiI9TVh]qXJ6m{vq%wtOQrS0+u6+=?[' );
define( 'SECURE_AUTH_SALT', '|k3)<,I:N@YdN!X rRt&wyJB)rw(TB^GfU-w7Z1+P&l?H*5vzZ|0qkR$TRUM,q0f' );
define( 'LOGGED_IN_SALT',   'l/(0!8UuEg:MLKStQ8blC&3 .<&]&j72g=AS_2J!?!md`fz} =6/PYy^E[]bb!}c' );
define( 'NONCE_SALT',       ' =v[rzQq}uh}-S;JTrqE!/<U?1+tt4a(v2:98P`N2|0n[]$V7 3wKIuj 7yT=c2|' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
