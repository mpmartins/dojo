<?php
require_once 'PHPUnit/Autoload.php';
require_once '../src/Template.php';

/**
 * TemplateTest will run assertions on Template class.
 *
 * @author "Marcelo Schmidt" <marcelo.schmidt@gmail.com>
 */
class TemplateTest extends PHPUnit_Framework_TestCase {
	
	/**
	 * Runs first assertion on data returned by Template run() method.
	 */
	public function testFirstAssertion() {
		$obj = new Template;
		$result = $obj->run();
		$this->assertEmpty($result);
	}
}
