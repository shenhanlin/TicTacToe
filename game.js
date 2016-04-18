/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var turn = 0;
var id = '';
var win = 0;
function move(id)
{

    if (document.getElementById(id).innerHTML !== "")
    {
        if (turn === 0)
        {
            document.getElementById(id).style.background = 'url(cha.jpg) no-repeat';
            document.getElementById(id).value = 'Player';
            document.getElementById(id).innerHTML = "";
            turn = 1;
        } else {
            document.getElementById(id).style.background = 'url(quan.jpg) no-repeat';
            document.getElementById(id).value = 'AI';
            document.getElementById(id).innerHTML = "";
            turn = 0;
        }
    }
    //chack if win or tie 
    check(id);
    //if win ask user palyer again or not
    if (win === 1)
    {
        var v = window.confirm('Play again?');
        if (v === true)
        {
            reset();
        }
    }
    //if Tie
    if (win === 2)
    {
        var v = window.confirm('Play again?');
        if (v === true)
        {
            reset();
        }
    }
    //if not win and its AI's turn do aiMove()
    if (win === 0 && turn === 1)
    {
        aiMove();
    }

}

function playerMove(obj)
{
    if (document.getElementById(obj.id).innerHTML !== "")
    {
        id = document.getElementById(obj.id).id;
        move(id);
    }
}
function aiMove()
{
    //pick a number from 0 to 9
    var aiPick = Math.floor(Math.random() * 10);
    //place on (0,0) if cant do aiMove() again
    if (aiPick === 0)
    {
        if (document.getElementById('one1').innerHTML !== "")
        {
            move('one1');
        } else {
            aiMove();
        }
    }
     //place on (0,1) if cant do aiMove() again
    if (aiPick === 1)
    {
        if (document.getElementById('one2').innerHTML !== "")
        {
            move('one2');
        } else {
            aiMove();
        }
    }
     //place on (0,2) if cant do aiMove() again
    if (aiPick === 2)
    {
        if (document.getElementById('one3').innerHTML !== "")
        {
            move('one3');
        } else {
            aiMove();
        }
    }
     //place on (1,0) if cant do aiMove() again
    if (aiPick === 3)
    {
        if (document.getElementById('two1').innerHTML !== "")
        {
            move('two1');
        } else {
            aiMove();
        }
    }
     //place on (1,1) if cant do aiMove() again
    if (aiPick === 4)
    {
        if (document.getElementById('two2').innerHTML !== "")
        {
            move('two2');
        } else {
            aiMove();
        }
    }
     //place on (1,2) if cant do aiMove() again
    if (aiPick === 5)
    {
        if (document.getElementById('two3').innerHTML !== "")
        {
            move('two3');
        } else {
            aiMove();
        }
    }
     //do aiMove() again
    if (aiPick === 6)
    {
            aiMove();
    }
     //place on (2,0) if cant do aiMove() again
    if (aiPick === 7)
    {
        if (document.getElementById('three1').innerHTML !== "")
        {
            move('three1');
        } else {
            aiMove();
        }
    }
     //place on (2,1) if cant do aiMove() again
    if (aiPick === 8)
    {
        if (document.getElementById('three2').innerHTML !== "")
        {
            move('three2');
        } else {
            aiMove();
        }
    }
     //place on (2,2) if cant do aiMove() again
    if (aiPick === 9)
    {
        if (document.getElementById('three3').innerHTML !== "")
        {
            move('three3');
        } else {
            aiMove();
        }
    }
}


function check(id)
{
    // 1 2 3
    if (document.getElementById('one1').value === document.getElementById('one2').value
            && document.getElementById('one2').value === document.getElementById('one3').value)
    {
        win = 1;
        alert(document.getElementById(id).value + "   win");
    }
    // 4 5 6
    if (document.getElementById('two1').value === document.getElementById('two2').value
            && document.getElementById('two2').value === document.getElementById('two3').value)
    {
        win = 1;
        alert(document.getElementById(id).value + "   win");
    }

    // 7 8 9
    if (document.getElementById('three1').value === document.getElementById('three2').value
            && document.getElementById('three2').value === document.getElementById('three3').value)
    {
        win = 1;
        alert(document.getElementById(id).value + "   win");
    }

    //1 4 7
    if (document.getElementById('one1').value === document.getElementById('two1').value
            && document.getElementById('two1').value === document.getElementById('three1').value)
    {
        win = 1;
        alert(document.getElementById(id).value + "   win");
    }

    //2 5 8
    if (document.getElementById('one2').value === document.getElementById('two2').value
            && document.getElementById('two2').value === document.getElementById('three2').value)
    {
        win = 1;
        alert(document.getElementById(id).value + "   win");
    }

    //3 6 9
    if (document.getElementById('one3').value === document.getElementById('two3').value
            && document.getElementById('two3').value === document.getElementById('three3').value)
    {
        win = 1;
        alert(document.getElementById(id).value + "   win");
    }

    // 1 5 9
    if (document.getElementById('one1').value === document.getElementById('two2').value
            && document.getElementById('two2').value === document.getElementById('three3').value)
    {
        win = 1;
        alert(document.getElementById(id).value + "   win");
    }

    //  3 5 7
    if (document.getElementById('one3').value === document.getElementById('two2').value
            && document.getElementById('two2').value === document.getElementById('three1').value)
    {
        win = 1;
        alert(document.getElementById(id).value + "   win");
    }

    //  Tie
    if (document.getElementById('one1').innerHTML === ""
            && document.getElementById('one2').innerHTML === ""
            && document.getElementById('one3').innerHTML === ""
            && document.getElementById('two1').innerHTML === ""
            && document.getElementById('two2').innerHTML === ""
            && document.getElementById('two3').innerHTML === ""
            && document.getElementById('three1').innerHTML === ""
            && document.getElementById('three2').innerHTML === ""
            && document.getElementById('three3').innerHTML === ""
            && win !== 1)
    {
        win = 2;
        alert("Tie");
    }




}

function reset()
{
    document.getElementById('one1').value = '1';
    document.getElementById('one2').value = '2';
    document.getElementById('one3').value = '3';
    document.getElementById('two1').value = '4';
    document.getElementById('two2').value = '5';
    document.getElementById('two3').value = '6';
    document.getElementById('three1').value = '7';
    document.getElementById('three2').value = '8';
    document.getElementById('three3').value = '9';

    document.getElementById('one1').innerHTML = "(0,0)";
    document.getElementById('one2').innerHTML = "(0,1)";
    document.getElementById('one3').innerHTML = "(0,2)";
    document.getElementById('two1').innerHTML = "(1,0)";
    document.getElementById('two2').innerHTML = "(1,1)";
    document.getElementById('two3').innerHTML = "(1,2)";
    document.getElementById('three1').innerHTML = "(2,0)";
    document.getElementById('three2').innerHTML = "(2,1)";
    document.getElementById('three3').innerHTML = "(2,2)";

    document.getElementById('one1').style.background = '';
    document.getElementById('one2').style.background = '';
    document.getElementById('one3').style.background = '';
    document.getElementById('two1').style.background = '';
    document.getElementById('two2').style.background = '';
    document.getElementById('two3').style.background = '';
    document.getElementById('three1').style.background = '';
    document.getElementById('three2').style.background = '';
    document.getElementById('three3').style.background = '';
    turn = 0;
    win = 0;
}