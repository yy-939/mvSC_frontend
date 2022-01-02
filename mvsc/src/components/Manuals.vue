<template>
  <el-tabs v-model="activeName" stretch @tab-click="handleClick">
    <!-- Install mvSC -->
    
    <el-tab-pane label="Intallation" name="first">
      <div style="width:100%;height:100%;">
      <font face="Times"><font size="4">
      mvSC is developed in Python 3.7, the dependencies for mvSC are as follows: </font></font>
      <div style="background-color: #FFFFFF">
        <p>
          <ul style="line-height:4;">
          <b>
            <li>pip3 install solidity_parser</li>
            <li>pip3 install paramiko</li>
          </b>
          </ul>
        </p>
      </div>
      </div>
    </el-tab-pane>

    <!-- Command Line -->
    <el-tab-pane label="Command Line Description" name="second">
      <div style="width:100%;height:100%;">
      <div style="background-color: #FFFFFF; text-align:center;">
        <b
          ><font size="3">
            python3&nbsp;&nbsp;mvSC/main/automata/run.py&nbsp;&nbsp;[<span><a href="#s">-s</a></span>
            solidity_file]&nbsp;&nbsp;[<span><a href="#m">-m</a></span> scenarion_file]&nbsp;&nbsp;[<span><a href="#p">-p</a></span>
            property_file]&nbsp;&nbsp;[<span><a href="#wf">-wf</a></span> workflow_file]&nbsp;&nbsp;[<span><a href="#c">-c</a></span>
            whether_on_server]&nbsp;&nbsp;[<span><a href="#maxi">-maxi</a></span>
            maxmus_of_integer]&nbsp;&nbsp;[<span><a href="#maxd">-maxd</a></span> maxmus_of_address]
          </font>
        </b>
      </div>
      <hr>
      <table border="1">
        <tr>
          <td>
            <a id="s">
            <p style="text-align:center;"><font face="Times"><font size="4">  
            <span><b><font size="5">-s:</font></b></span> The solidity file path for verification.
            </font></font>
            </p>
            </a>
            </td>
        </tr>
        <tr>
          <td>
            <a id="m">
            <p style="text-align:center;line-height:4"><font face="Times"><font size="4">  
            <span><b><font size="5">-m:</font></b></span> Scenarion configuration file path for verification, 
          users can use PDL to describe the scenarion. In PDL, Carriage return can be used to describe order, 
          '|' can be used to describe concurrence. Additionally, every function need two additional parameters <span><b>'msg.sender'</b></span> and <span><b>'msg.value'</b></span> to indicate who call the function and
           how much it takes.
            </font></font>
            </p>
            </a>
           </td>
        </tr>
        <tr>
          <td>
            <a id="p">
            <p style="text-align:center;"><font face="Times"><font size="4"> 
              <span><b><font size="5">-p:</font></b></span> The property file path for verification.
            </font></font>
            </p>
            </a>
              </td>
        </tr>
        <tr>
          <td>
            <a id="wf">
            <p style="text-align:center;"><font face="Times"><font size="4"> 
            <span><b><font size="5">-wf:</font></b></span> The workflow json file path for verification
            </font></font>
            </p>
            </a>
            </td>
        </tr>
        <tr>
          <td>
            <a id="c">
            <p style="text-align:center;"><font face="Times"><font size="4"> 
            <span><b><font size="5">-c:</font></b></span> Whether run VERDS on server or not. [-c l] for local, [-c s] for server, default on local
            </font></font>
            </p>
            </a>
            </td>
        </tr>
        <tr>
          <td>
            <a id="maxi">
            <p style="text-align:center;"><font face="Times"><font size="4"> 
            <span><b><font size="5">-maxi:</font></b></span> The maximus for intergers when generating VVM, the default value is 10
            </font></font>
            </p>
            </a>
            </td>
        </tr>
        <tr>
          <td>
            <a id="maxd">
            <p style="text-align:center;"><font face="Times"><font size="4"> 
            <span><b><font size="5">-maxd:</font></b></span> The maximus for address when generatiing VVM, the default value is 5
            </font></font>
            </p>
            </a>
            </td>
        </tr>
      </table>
      <hr>
    <div style="background-color: #FFFFFF; text-align:center;"><font size="3"><b>
      Example: python3 mvSC/main/automata/run.py -s mvSC/test/vAuction/Auction1/Auction1.sol -m mvSC/test/vAuction/Auction1/m.txt -p mvSC/test/vAuction/Auction1/p.txt -c s
    </b>
    </font>
    </div>  
      </div>
    </el-tab-pane>
  </el-tabs>
  
  
</template>


<script>
export default {
  name: "Manuals.vue",
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
.el-tabs__item{
  font-family:'Times New Roman', Times, serif;font-size:20px;
}
</style>
