<?php /** @var umiTemplaterPHP $this */ ?>
<?php /** @var array $variables */ ?>
<?php
define('TEMPLATE_RESOURCES', str_replace(CURRENT_WORKING_DIR, '', dirname(__DIR__)));
define('TEMPLATE_VERSION', '?v=20160204');
define('CONTACTS_TYPE_ID', 122);
define('CATALOG_OBJECT_FIELD_MAIN_IMAGE', 'object_image');

define('MODULE', $variables['@module']);
define('METHOD', $variables['@method']);
define('IS_AUTH', getArrayKey($variables['user'], '@status') == 'auth');

$page = getArrayKey($variables, 'full:page');
define('IS_DEFAULT', $page instanceof umiHierarchyElement ? $page->getIsDefault() : false);
define('PAGE_ID', getArrayKey($variables, '@pageId'));
define('SITE_CONFIG_ID', $this->getConfigId());

$this->setCommonVar('cart', $this->macros('emarket', 'cart'));
$this->setCommonVar('variables', $variables);
