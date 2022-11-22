import NetWorkRequest from '../network_request';

export default class CreateGameRequest {
    create = () => {
        const networRequest = new NetWorkRequest();
        return networRequest.post('apps')
    }
}