package day17;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
public class RedisConfig {

    //@Bean
    //public RedisTemplate<String , Object> redisTemplate(RedisConnectionFactory connectionFactory){
    //    // 1. 레디스 템플릿 객체 생성 : 레디스 형식을 MAP 타입으로 사용하기 위한 설정
    //    RedisTemplate<String , Object> template = new RedisTemplate<>();
    //    // 2. 생성한 템플릿 객체를 팩토리(레디스 저장소) 등록
    //    template.setConnectionFactory( connectionFactory );
    //    // 3. 생성한 템플릿은 key 값을 String 타입으로 직렬화 한다.
    //    template.setKeySerializer( new StringRedisSerializer() );
    //    // 4. 생성한 템플릿은 value 값을 JSON/DTO 타입으로 직렬화 한다.
    //    template.setValueSerializer( new GenericJackson2JsonRedisSerializer( ) );
    //    // * 직렬화 : 레디스에 지정한 데이터를 자바 타입으로 변환 과정 , 역직렬화 (복원)
    //    return template;
    //}   // func end

}   // class end
