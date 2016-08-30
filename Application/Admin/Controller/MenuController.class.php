<?php
namespace Admin\Controller;
use Think\Controller;

/**
 * menu控制
 */

class MenuController extends CommonController{
    public function index(){
        $this->display();
    }

    public  function add(){
        $this->display();
    }
}