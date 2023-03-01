var shield=[];
var shieldR=100,shieldTime=5000,shieldCd=[];
function skill_1(k){
    tim=0;
    var bullet =new Object();
    bullet.k=k;
    bullet.vis=1;
    bullet.x=px[k];
    bullet.y=py[k];
    var dx=px[1-k]+pw[1-k]/2-px[k],dy=py[1-k]+ph[1-k]/2-py[k];
    var d=Math.sqrt(dx*dx+dy*dy);
    bullet.xv=16*dx/d;
    bullet.yv=16*dy/d;
    set.push(bullet);
}
function skill_2(k){
    if(a[k]<16)
    {
        a[k]*=2;
        setTimeout(function(){
            a[k]/=2;
        },5000);
    }
}
function skill_3(k){
    if(shieldCd[k])
    return;
    var a=new Object();
    a.x=px[k];
    a.y=py[k];
    shield.push(a);
    shieldCd[k]=1;
    setTimeout(function(){
        shield.shift();
    },shieldTime);
    setTimeout(function(){
        shieldCd[k]=0;
    },10000);
}