import { IDKit } from '@worldcoin/idkit-standalone'
const onSuccess = (result) => {
    // Redirect to success URL with token
    window.location.href = `https://your_app/success?token=${result.token}`;
};

IDKit.init({
    app_id: 'app_staging_d2fdb1622a1a3f396abdecf1eef2efad',
    action: 'vote-for-moolah',
    onSuccess: onSuccess,
});

document.getElementById('verify-button').addEventListener('click', () => {
    console.log("testings!");
    IDKit.open().then(() => {
        console.log('Widget opened');
    }).catch((error) => {
        console.error('Error opening widget:', error);
    });
});