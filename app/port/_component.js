import styles from "./page.module.css";

export default function Carrer() {
  return (
    <>
      <section>
        <div className={styles.back_white}>
          <div className={styles.school_title_top}>
            <h2 className={styles.school_title}>자동차 관련 직무 </h2>
            <div className={styles.school_title_down}>
              <div>총 1년 2개월</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.carrer_top}>
          <div>
            <div>2022.02 ~ </div>
            <div> 재직 중</div>
            <br/>
            <div>  1년 2개월</div>
            
          </div>
          <div>
            <div>와보텍 </div>
            <div>ICT연구소_학생 연구원 </div>
            
          </div>
          <div>
            <div>
              <div>주요직무</div>
              <div>
                
                <br />
                 -Azure kinect를 이용한 자동차 부품 역설계 스캔 데이터 추출- <br />
                <br />
                
                전기자동차 셀과 같은 부품들을 스캔하여, pycharm을 이용한 사내 자체 코드로 데이터 추출 및 정합 <br />
                <br />
                -사내 아두이노 키트 유지보수 및 기초 전기전자 교안 초기 작성-         
                자료 수집
                <br />
                <br />
                -VR기반 NCS 친환경 자율 주행 자동차 실습모듈 개발 자료 정리- 
                <br />
                <br />
                 
                -친환경 운전 습관 안드로이드 앱 개발관련 자료 파일관리 및 발표회 자료조사 내용 정리-
                <br />

                <br />
                 
                -사내 연구 보조, 재고 관리, 역설계 데이터 정합 작업 
                <br />
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section>
      </section>
    </>
  );
}
